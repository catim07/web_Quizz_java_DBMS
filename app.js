/* ==========================================================================
   WAYQUIZZ - CORE APPLICATION LOGIC
   Features:
   - Web Audio API Sound Effects (Chime, Buzzer, Click, Fanfare)
   - Canvas Confetti Animation
   - Intelligent Text Parser for Quick Import (Multi-format)
   - Quiz Management (CRUD, LocalStorage, JSON Export/Import)
   - Exam Mode & Instant Study Mode
   - Detailed Question Review & Wrong-Question Practice
   ========================================================================== */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. SOUND SYNTHESIZER (Web Audio API - 100% Offline)
  // ---------------------------------------------------------------------------
  class SoundSynth {
    constructor() {
      this.ctx = null;
      this.enabled = localStorage.getItem('wayquizz_sound') !== 'false';
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    }

    playChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      // High-pitched pleasant dual-tone chime (E5 -> B5)
      const now = this.ctx.currentTime;
      [659.25, 987.77].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.15, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.35);
      });
    }

    playBuzzer() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      // Soft low buzzer
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.22);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    }

    playFanfare() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      // Major triad celebration arpeggio: C5, E5, G5, C6
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.2, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + (idx === 3 ? 0.7 : 0.25));
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + (idx === 3 ? 0.7 : 0.25));
      });
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('wayquizz_sound', this.enabled ? 'true' : 'false');
      return this.enabled;
    }
  }

  const sound = new SoundSynth();

  // ---------------------------------------------------------------------------
  // 2. CANVAS CONFETTI CELEBRATION
  // ---------------------------------------------------------------------------
  class ConfettiEngine {
    constructor() {
      this.canvas = document.getElementById('confetti-canvas');
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.animId = null;
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    burst() {
      this.resize();
      const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#06b6d4', '#a855f7', '#ffffff'];
      for (let i = 0; i < 120; i++) {
        this.particles.push({
          x: this.canvas.width / 2 + (Math.random() - 0.5) * 100,
          y: this.canvas.height / 2,
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.7) * 22,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 12,
          life: 1.0,
          decay: Math.random() * 0.015 + 0.008
        });
      }
      if (!this.animId) this.animate();
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.45; // gravity
        p.vx *= 0.98; // air drag
        p.rotation += p.rotSpeed;
        p.life -= p.decay;

        if (p.life <= 0 || p.y > this.canvas.height + 20) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.globalAlpha = Math.max(0, p.life);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        this.animId = requestAnimationFrame(() => this.animate());
      } else {
        this.animId = null;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  const confetti = new ConfettiEngine();

  // ---------------------------------------------------------------------------
  // 3. STORAGE & STATE MANAGEMENT
  // ---------------------------------------------------------------------------
  const STORAGE_KEY = 'wayquizz_quiz_sets_v1';
  const HISTORY_KEY = 'wayquizz_history_v1';
  const NOTEBOOK_KEY = 'wayquizz_mistake_notebook_v1';

  let allQuizSets = [];
  let userHistory = {};
  let mistakeNotebook = {}; // { questionId: { question, options, correctAnswer, explanation, addedAt } }
  let lastMockConfig = { subject: 'java', timeMinutes: 40, mode: 'exam' };

  // Predefined Mock Exam Presets (40 questions extracted randomly)
  const MOCK_40_QUIZZES = [
    {
      id: 'mock_40_java',
      title: '🎯 Đề Thi Thử Core Java (40 Câu Ngẫu Nhiên)',
      badge: '40 Câu Chuẩn',
      category: 'Thi thử 40 câu',
      icon: '☕',
      durationMinutes: 40,
      description: 'Mô phỏng kỳ thi thực tế: 40 câu hỏi trích ngẫu nhiên từ kho 320 câu Core Java, tự động đảo ngẫu nhiên đáp án A-B-C-D mỗi lần thi.'
    },
    {
      id: 'mock_40_dbms',
      title: '🎯 Đề Thi Thử DBMS (40 Câu Ngẫu Nhiên)',
      badge: '40 Câu Chuẩn',
      category: 'Thi thử 40 câu',
      icon: '🗄️',
      durationMinutes: 40,
      description: 'Mô phỏng kỳ thi chuẩn CDAC DBMS: 40 câu trích ngẫu nhiên từ kho 260 câu DBMS (Oracle RDBMS, SQL, Normalization, Concurrency).'
    },
    {
      id: 'mock_40_mix',
      title: '🎯 Đề Thi Thử Tổng Hợp Java & DBMS (40 Câu)',
      badge: '40 Câu Chuẩn',
      category: 'Thi thử 40 câu',
      icon: '🔀',
      durationMinutes: 40,
      description: 'Đề thi kết hợp toàn diện: 20 câu Core Java + 20 câu DBMS trích xuất ngẫu nhiên, thời gian làm bài chuẩn 40 phút.'
    }
  ];

  function ensureMock40Sets() {
    MOCK_40_QUIZZES.forEach(mockSet => {
      const idx = allQuizSets.findIndex(s => s.id === mockSet.id);
      if (idx !== -1) {
        allQuizSets[idx] = { ...mockSet, questions: [] };
      } else {
        allQuizSets.unshift({ ...mockSet, questions: [] });
      }
    });
  }

  function generateMock40Questions(subject = 'java') {
    let javaPool = [];
    let dbmsPool = [];

    // Java question pool
    const fullJava = allQuizSets.find(s => s.id === 'java_mega_full_320');
    if (fullJava && fullJava.questions && fullJava.questions.length > 0) {
      javaPool = fullJava.questions;
    } else {
      allQuizSets.filter(s => s.id && s.id.startsWith('java_mod_')).forEach(s => {
        if (s.questions) javaPool.push(...s.questions);
      });
    }

    // DBMS question pool
    const fullDbms = allQuizSets.find(s => s.id === 'dbms_mega_full_260' || s.id === 'dbms_mega_full_118');
    if (fullDbms && fullDbms.questions && fullDbms.questions.length > 0) {
      dbmsPool = fullDbms.questions;
    } else {
      allQuizSets.filter(s => s.id && s.id.startsWith('dbms_mod_')).forEach(s => {
        if (s.questions) dbmsPool.push(...s.questions);
      });
    }

    // Fallbacks
    if (javaPool.length === 0 && window.DEFAULT_QUIZZES) {
      const jFull = window.DEFAULT_QUIZZES.find(s => s.id === 'java_mega_full_320');
      if (jFull) javaPool = jFull.questions || [];
    }
    if (dbmsPool.length === 0 && window.DBMS_QUIZZES) {
      const dFull = window.DBMS_QUIZZES.find(s => s.id === 'dbms_mega_full_260');
      if (dFull) dbmsPool = dFull.questions || [];
    }

    let picked = [];
    if (subject === 'java') {
      picked = shuffle(javaPool).slice(0, 40);
    } else if (subject === 'dbms') {
      picked = shuffle(dbmsPool).slice(0, 40);
    } else {
      const jPicked = shuffle(javaPool).slice(0, 20);
      const dPicked = shuffle(dbmsPool).slice(0, 20);
      picked = shuffle([...jPicked, ...dPicked]);
    }
    return picked;
  }

  function openMock40Modal() {
    sound.playClick();
    const modal = document.getElementById('mock-40-modal');
    if (modal) modal.style.display = 'flex';
  }

  function closeMock40Modal() {
    const modal = document.getElementById('mock-40-modal');
    if (modal) modal.style.display = 'none';
  }

  function startMock40Exam(subject = 'java', timeMinutes = 40, mode = 'exam') {
    lastMockConfig = { subject, timeMinutes, mode };
    const pickedQuestions = generateMock40Questions(subject);
    if (pickedQuestions.length === 0) {
      showToast('Không tìm thấy câu hỏi trong ngân hàng đề!', 'error');
      return;
    }

    const titleMap = {
      java: '🎯 Đề Thi Thử Core Java (40 Câu Ngẫu Nhiên)',
      dbms: '🎯 Đề Thi Thử DBMS (40 Câu Ngẫu Nhiên)',
      mix: '🎯 Đề Thi Thử Tổng Hợp Java & DBMS (40 Câu)'
    };

    closeMock40Modal();
    const quizId = `mock_40_${subject}`;
    let mockQuiz = allQuizSets.find(s => s.id === quizId);
    if (!mockQuiz) {
      mockQuiz = {
        id: quizId,
        title: titleMap[subject] || '🎯 Thi Thử 40 Câu Ngẫu Nhiên',
        badge: '40 Câu Chuẩn',
        durationMinutes: timeMinutes,
        questions: []
      };
      allQuizSets.unshift(mockQuiz);
    } else {
      mockQuiz.durationMinutes = timeMinutes;
    }

    startQuizSession(quizId, mode, pickedQuestions, timeMinutes);
  }

  function loadQuizzesFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        allQuizSets = JSON.parse(stored);
        // Refresh Java quizzes with new explanations and exam tips
        if (window.DEFAULT_QUIZZES && Array.isArray(window.DEFAULT_QUIZZES)) {
          window.DEFAULT_QUIZZES.forEach(javaSet => {
            const existingIdx = allQuizSets.findIndex(s => s.id === javaSet.id);
            if (existingIdx !== -1) {
              allQuizSets[existingIdx] = JSON.parse(JSON.stringify(javaSet));
            } else {
              allQuizSets.push(JSON.parse(JSON.stringify(javaSet)));
            }
          });
        }
        // Merge or refresh DBMS quizzes from window.DBMS_QUIZZES
        if (window.DBMS_QUIZZES && Array.isArray(window.DBMS_QUIZZES)) {
          // Remove outdated 118-question dbms sets if present
          allQuizSets = allQuizSets.filter(s => s.id !== 'dbms_mega_full_118');
          window.DBMS_QUIZZES.forEach(dbmsSet => {
            const existingIdx = allQuizSets.findIndex(s => s.id === dbmsSet.id);
            if (existingIdx !== -1) {
              allQuizSets[existingIdx] = JSON.parse(JSON.stringify(dbmsSet));
            } else {
              allQuizSets.push(JSON.parse(JSON.stringify(dbmsSet)));
            }
          });
        }
        ensureMock40Sets();
        saveQuizzesToStorage();
      } else {
        allQuizSets = [];
        if (window.DEFAULT_QUIZZES && Array.isArray(window.DEFAULT_QUIZZES)) {
          allQuizSets = JSON.parse(JSON.stringify(window.DEFAULT_QUIZZES));
        }
        if (window.DBMS_QUIZZES && Array.isArray(window.DBMS_QUIZZES)) {
          allQuizSets = allQuizSets.concat(JSON.parse(JSON.stringify(window.DBMS_QUIZZES)));
        }
        ensureMock40Sets();
        saveQuizzesToStorage();
      }
    } catch (e) {
      console.error('Failed to load quizzes from storage:', e);
      allQuizSets = (window.DEFAULT_QUIZZES || []).concat(window.DBMS_QUIZZES || []);
      ensureMock40Sets();
    }

    try {
      const hist = localStorage.getItem(HISTORY_KEY);
      userHistory = hist ? JSON.parse(hist) : {};
    } catch (e) {
      userHistory = {};
    }

    try {
      const nb = localStorage.getItem(NOTEBOOK_KEY);
      mistakeNotebook = nb ? JSON.parse(nb) : {};
    } catch (e) {
      mistakeNotebook = {};
    }
  }

  function saveQuizzesToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allQuizSets));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
      showToast('Bộ nhớ trình duyệt đầy hoặc không thể lưu.', 'error');
    }
  }

  function saveHistoryRecord(quizId, score, total) {
    if (!userHistory[quizId]) {
      userHistory[quizId] = { attempts: 0, bestScore: 0, lastScore: 0, totalQuestions: total };
    }
    userHistory[quizId].attempts += 1;
    userHistory[quizId].lastScore = score;
    if (score > userHistory[quizId].bestScore) {
      userHistory[quizId].bestScore = score;
    }
    localStorage.setItem(HISTORY_KEY, JSON.stringify(userHistory));
  }

  function saveMistakeNotebook() {
    try {
      localStorage.setItem(NOTEBOOK_KEY, JSON.stringify(mistakeNotebook));
    } catch (e) {
      console.error('Failed to save notebook:', e);
    }
  }

  // ---------------------------------------------------------------------------
  // 4. FISHER-YATES SHUFFLE UTILITY
  // ---------------------------------------------------------------------------
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /**
   * Shuffle both the question list AND the options within each question.
   * Returns new question objects with shuffled options, updating correctAnswer accordingly.
   */
  function shuffleQuestionsAndOptions(questions) {
    // Shuffle question order
    const shuffled = shuffle(questions);
    // For each question, shuffle its options and track the correct answer
    return shuffled.map(q => {
      const originalOpts = q.options.filter(o => o && o.trim());
      const indices = originalOpts.map((_, i) => i);
      const shuffledIndices = shuffle(indices);
      const newOpts = shuffledIndices.map(i => originalOpts[i]);
      const oldCorrectText = originalOpts[q.correctAnswer];
      const newCorrectIdx = shuffledIndices.indexOf(q.correctAnswer);
      return {
        ...q,
        options: newOpts,
        correctAnswer: newCorrectIdx >= 0 ? newCorrectIdx : 0,
        _originalId: q.id
      };
    });
  }

  // ---------------------------------------------------------------------------
  // 4. SMART TEXT PARSER (QUY TẮC NHẬP NHANH BẰNG ĐOẠN VĂN BẢN)
  // ---------------------------------------------------------------------------
  /**
   * Phân tích một khối văn bản thành danh sách câu hỏi trắc nghiệm
   * Hỗ trợ các cú pháp:
   * 1. Câu hỏi bắt đầu bằng: "Câu N:", "Question N:", "Q N:", hoặc đoạn văn bản tự do
   * 2. Lựa chọn bắt đầu bằng: "A.", "B.", "C.", "D." hoặc "A)", "[A]", "1.", v.v.
   * 3. Đáp án đúng:
   *    - Đánh dấu trực tiếp trong dòng lựa chọn: "*A.", "[x] A.", "(x) A.", "A. Đáp án (đúng)"
   *    - Hoặc khai báo ở dòng riêng: "Đáp án: B", "Answer: B", "Key: B", "Đ/A: B"
   * 4. Giải thích: "Giải thích: ...", "Explanation: ..."
   * 5. Khối mã code (```java ... ```) được tự động tách ra trường code
   */
  function parseQuickText(text) {
    if (!text || !text.trim()) return [];

    const lines = text.split(/\r?\n/);
    const questions = [];

    // Split text into question blocks based on empty lines or question headers
    let currentBlock = [];
    const blocks = [];

    const isQuestionStart = (line) => {
      const trimmed = line.trim();
      return /^(Câu\s*\d+|Question\s*\d+|Q\s*\d+|Bài\s*\d+)[:.]/i.test(trimmed);
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (isQuestionStart(line) && currentBlock.length > 0) {
        blocks.push(currentBlock);
        currentBlock = [line];
      } else if (line.trim() === '---' || line.trim() === '===') {
        if (currentBlock.length > 0) {
          blocks.push(currentBlock);
          currentBlock = [];
        }
      } else {
        currentBlock.push(line);
      }
    }
    if (currentBlock.length > 0) {
      blocks.push(currentBlock);
    }

    // Process each block
    blocks.forEach((blockLines, bIdx) => {
      const rawText = blockLines.join('\n').trim();
      if (!rawText) return;

      let qTitle = '';
      let qCode = '';
      let options = [];
      let correctAnswerIndex = -1;
      let explanation = '';

      let parsingOptions = false;
      let inCodeBlock = false;
      let codeLines = [];
      let questionLines = [];

      for (let j = 0; j < blockLines.length; j++) {
        const line = blockLines[j];
        const trimmed = line.trim();

        // Code block detector
        if (trimmed.startsWith('```')) {
          inCodeBlock = !inCodeBlock;
          continue;
        }
        if (inCodeBlock) {
          codeLines.push(line);
          continue;
        }

        // Explanation detector
        const explMatch = trimmed.match(/^(Giải\s*thích|Explanation|Ghi\s*chú|Note|Feedback)[:\s]+(.*)$/i);
        if (explMatch) {
          explanation = explMatch[2].trim();
          continue;
        }

        // Standalone Answer detector (e.g., "Đáp án: B" or "Answer: C")
        const ansMatch = trimmed.match(/^(Đáp\s*án|Answer|Key|Đ\/A|Correct)[:\s]+([A-D1-4])/i);
        if (ansMatch) {
          const letter = ansMatch[2].toUpperCase();
          if (letter === 'A' || letter === '1') correctAnswerIndex = 0;
          else if (letter === 'B' || letter === '2') correctAnswerIndex = 1;
          else if (letter === 'C' || letter === '3') correctAnswerIndex = 2;
          else if (letter === 'D' || letter === '4') correctAnswerIndex = 3;
          continue;
        }

        // Option detector: A. / B. / C. / D. or with star/check: *A. / [x] A.
        const optMatch = trimmed.match(/^(\*|\[x\]|\(x\)|✓)?\s*([A-D1-4])[\.\)\:\-]\s*(.*)$/i);
        if (optMatch) {
          parsingOptions = true;
          const isMarked = Boolean(optMatch[1]);
          let optText = optMatch[3].trim();

          // Check if option text ends with (đúng) or (correct) or *
          if (/\((đúng|correct)\)|\*$/i.test(optText)) {
            optText = optText.replace(/\((đúng|correct)\)|\*$/i, '').trim();
            correctAnswerIndex = options.length;
          } else if (isMarked) {
            correctAnswerIndex = options.length;
          }

          options.push(optText);
          continue;
        }

        if (!parsingOptions) {
          questionLines.push(line);
        } else {
          // If we already started parsing options and line is not an option, append to explanation or last option
          if (explanation) {
            explanation += ' ' + trimmed;
          } else if (options.length > 0) {
            options[options.length - 1] += '\n' + trimmed;
          }
        }
      }

      // Format Question text (clean prefix like "Câu 1:")
      qTitle = questionLines.join('\n').trim();
      qTitle = qTitle.replace(/^(Câu\s*\d+|Question\s*\d+|Q\s*\d+|Bài\s*\d+)[:.]\s*/i, '');
      if (codeLines.length > 0) {
        qCode = codeLines.join('\n');
      }

      if (qTitle && options.length >= 2) {
        // Pad options to 4 if only 2 or 3
        while (options.length < 4) {
          options.push('');
        }
        questions.push({
          id: `custom_q_${Date.now()}_${bIdx}`,
          question: qTitle,
          code: qCode,
          options: options.slice(0, 4),
          correctAnswer: correctAnswerIndex >= 0 ? correctAnswerIndex : 0,
          explanation: explanation || 'Đáp án theo đề bài trắc nghiệm.'
        });
      }
    });

    return questions;
  }

  // ---------------------------------------------------------------------------
  // 5. TOAST NOTIFICATIONS
  // ---------------------------------------------------------------------------
  function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    toast.innerHTML = `<span>${icon}</span> <span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ---------------------------------------------------------------------------
  // 6. DASHBOARD & QUIZ CARDS RENDERER
  // ---------------------------------------------------------------------------
  let currentCategoryFilter = 'all';
  let currentSearchQuery = '';

  function renderDashboard() {
    const grid = document.getElementById('quizzes-card-grid');
    grid.innerHTML = '';

    // Calculate overall stats
    const totalQuestions = allQuizSets.reduce((sum, s) => sum + (s.questions ? s.questions.length : 0), 0);
    document.getElementById('stat-total-questions').textContent = totalQuestions;
    document.getElementById('stat-total-sets').textContent = allQuizSets.length;

    let completedCount = 0;
    Object.values(userHistory).forEach(h => {
      if (h.attempts > 0) completedCount++;
    });
    document.getElementById('stat-completed-count').textContent = completedCount;

    // Filter sets
    const filtered = allQuizSets.filter(quiz => {
      // Category filter
      let matchCat = true;
      if (currentCategoryFilter !== 'all') {
        if (currentCategoryFilter === 'Tự tạo') {
          matchCat = quiz.category === 'Tự tạo';
        } else {
          matchCat = quiz.category === currentCategoryFilter;
        }
      }

      // Search filter
      let matchSearch = true;
      if (currentSearchQuery) {
        const q = currentSearchQuery.toLowerCase();
        matchSearch = quiz.title.toLowerCase().includes(q) ||
                      (quiz.description && quiz.description.toLowerCase().includes(q)) ||
                      (quiz.category && quiz.category.toLowerCase().includes(q));
      }
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Không tìm thấy bộ đề phù hợp</h3>
          <p>Hãy thử tìm kiếm với từ khóa khác hoặc bấm nút "Tạo Đề / Nhập Text" để tạo bộ đề mới.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(quiz => {
      const isMock = quiz.id && quiz.id.startsWith('mock_40');
      const qCount = isMock ? 40 : (quiz.questions ? quiz.questions.length : 0);
      const history = userHistory[quiz.id];
      const bestScoreText = history ? `Điểm cao nhất: ${history.bestScore}/${history.totalQuestions}` : 'Chưa thi';

      const actionsHtml = isMock ? `
        <div class="quiz-card-actions">
          <button class="btn btn-warning btn-play" data-quiz-id="${quiz.id}" data-mode="exam" title="Bắt đầu thi thử 40 câu tính giờ 40 phút, nộp bài mới biết điểm">
            🎯 Thi Thử 40 Phút
          </button>
          <button class="btn btn-secondary" data-quiz-id="${quiz.id}" data-mode="study" title="Làm bài và biết kết quả đúng sai ngay từng câu">
            ⚡ Hiện Đúng/Sai
          </button>
        </div>
      ` : `
        <div class="quiz-card-actions">
          <button class="btn btn-accent btn-play" data-quiz-id="${quiz.id}" data-mode="study" title="Làm bài và biết kết quả đúng sai ngay từng câu">
            ⚡ Hiện Đúng/Sai
          </button>
          <button class="btn btn-secondary" data-quiz-id="${quiz.id}" data-mode="exam" title="Bắt đầu thi thử có tính giờ, nộp bài mới biết điểm">
            ⏱️ Thi Thử
          </button>
          <button class="btn btn-ghost btn-icon-only btn-edit-quiz" data-quiz-id="${quiz.id}" title="Chỉnh sửa bộ đề">
            ✏️
          </button>
          <button class="btn btn-ghost btn-icon-only btn-delete-quiz" data-quiz-id="${quiz.id}" title="Xóa bộ đề này" style="color: var(--danger);">
            🗑️
          </button>
        </div>
      `;

      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.innerHTML = `
        <div class="quiz-card-header">
          <div class="quiz-icon-badge">${quiz.icon || '☕'}</div>
          <span class="quiz-badge">${quiz.badge || quiz.category || 'Module'}</span>
        </div>
        <h3 class="quiz-card-title">${quiz.title}</h3>
        <p class="quiz-card-desc">${quiz.description || 'Bộ đề ôn tập trắc nghiệm kiến thức Core Java chuẩn.'}</p>
        
        <div class="quiz-card-meta">
          <div class="meta-item">
            <span>📝</span> <span>${qCount} câu hỏi</span>
          </div>
          <div class="meta-item">
            <span>⏱️</span> <span>${quiz.durationMinutes || 25} phút</span>
          </div>
          <div class="meta-item" style="margin-left: auto; color: ${history ? 'var(--success)' : 'var(--text-muted)'}; font-weight: 600;">
            <span>⭐</span> <span>${bestScoreText}</span>
          </div>
        </div>

        ${actionsHtml}
      `;

      // Event listeners for card buttons
      const studyBtn = card.querySelector('[data-mode="study"]');
      const examBtn = card.querySelector('[data-mode="exam"]');
      const editBtn = card.querySelector('.btn-edit-quiz');
      const deleteBtn = card.querySelector('.btn-delete-quiz');

      if (studyBtn) studyBtn.addEventListener('click', () => startQuizSession(quiz.id, 'study'));
      if (examBtn) examBtn.addEventListener('click', () => startQuizSession(quiz.id, 'exam'));
      if (editBtn) editBtn.addEventListener('click', () => openQuizEditor(quiz.id));
      if (deleteBtn) deleteBtn.addEventListener('click', () => deleteQuizSet(quiz.id));

      grid.appendChild(card);
    });
  }

  // ---------------------------------------------------------------------------
  // 7. QUIZ PLAYER LOGIC (EXAM & STUDY MODES)
  // ---------------------------------------------------------------------------
  let activeQuiz = null;
  let activeQuestions = [];
  let currentQIndex = 0;
  let userAnswers = {};      // { [qIndex]: optionIndex }
  let flaggedQuestions = new Set();
  let quizMode = 'exam';     // 'exam' or 'study'
  let timerInterval = null;
  let secondsRemaining = 0;
  let totalTimeSpentSeconds = 0;

  function startQuizSession(quizId, mode = 'study', customQuestions = null, customDurationMinutes = null) {
    activeQuiz = allQuizSets.find(q => q.id === quizId);
    if (!activeQuiz && !customQuestions) {
      showToast('Không tìm thấy đề thi!', 'error');
      return;
    }

    sound.playClick();
    quizMode = mode;
    currentQIndex = 0;
    userAnswers = {};
    flaggedQuestions.clear();

    let rawQuestions;
    if (customQuestions) {
      rawQuestions = customQuestions;
    } else if (quizId && quizId.startsWith('mock_40_')) {
      const subject = quizId.replace('mock_40_', '');
      rawQuestions = generateMock40Questions(subject);
      lastMockConfig = { subject, timeMinutes: activeQuiz?.durationMinutes || 40, mode };
    } else {
      rawQuestions = JSON.parse(JSON.stringify(activeQuiz.questions || []));
    }

    if (!rawQuestions || rawQuestions.length === 0) {
      showToast('Bộ đề này chưa có câu hỏi nào!', 'error');
      return;
    }

    // Shuffle questions and options each session
    activeQuestions = shuffleQuestionsAndOptions(rawQuestions);

    // Switch View
    document.getElementById('view-dashboard').style.display = 'none';
    document.getElementById('view-result').style.display = 'none';
    document.getElementById('view-player').style.display = 'block';

    // Set UI Headers
    document.getElementById('player-quiz-title').textContent = activeQuiz ? activeQuiz.title : 'Luyện tập câu hỏi';
    updatePlayerModeBadge();

    // Setup Timer
    clearInterval(timerInterval);
    let durationMins;
    if (customDurationMinutes !== null && customDurationMinutes !== undefined) {
      durationMins = customDurationMinutes;
    } else if (activeQuiz && activeQuiz.durationMinutes !== undefined) {
      durationMins = activeQuiz.durationMinutes;
    } else {
      durationMins = Math.ceil(activeQuestions.length * 1.5);
    }

    totalTimeSpentSeconds = 0;
    if (durationMins > 0) {
      secondsRemaining = durationMins * 60;
      updateTimerDisplay();

      timerInterval = setInterval(() => {
        totalTimeSpentSeconds++;
        if (secondsRemaining > 0) {
          secondsRemaining--;
          updateTimerDisplay();
          if (secondsRemaining === 60) {
            showToast('⚠️ Còn lại 1 phút làm bài!', 'error');
            document.getElementById('player-timer-box').classList.add('warning');
          }
        } else {
          clearInterval(timerInterval);
          showToast('⏰ Đã hết giờ làm bài! Tự động nộp bài.', 'info');
          submitQuizSession();
        }
      }, 1000);
    } else {
      secondsRemaining = 0;
      document.getElementById('player-timer-text').textContent = '∞';
      timerInterval = setInterval(() => {
        totalTimeSpentSeconds++;
      }, 1000);
    }

    // Render Question
    renderCurrentQuestion();
    renderPalette();
  }

  function updateTimerDisplay() {
    const mins = Math.floor(secondsRemaining / 60);
    const secs = secondsRemaining % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('player-timer-text').textContent = str;
  }

  function renderCurrentQuestion() {
    const q = activeQuestions[currentQIndex];
    if (!q) return;

    // Progress
    const total = activeQuestions.length;
    const answeredCount = Object.keys(userAnswers).length;
    const pct = Math.round(((currentQIndex + 1) / total) * 100);
    document.getElementById('player-progress-fill').style.width = `${pct}%`;
    document.getElementById('player-progress-text').textContent = `Câu ${currentQIndex + 1} / ${total}`;
    document.getElementById('player-answered-count').textContent = `Đã làm: ${answeredCount}/${total}`;
    document.getElementById('palette-indicator-text').textContent = `${currentQIndex + 1}/${total}`;

    // Module badge
    document.getElementById('question-module-badge').textContent = activeQuiz ? (activeQuiz.badge || 'Core Java') : 'Ôn tập';

    // Flag button state
    const flagBtn = document.getElementById('btn-toggle-flag');
    const isFlagged = flaggedQuestions.has(currentQIndex);
    if (isFlagged) {
      flagBtn.classList.add('active');
      document.getElementById('flag-btn-text').textContent = 'Đã gắn cờ';
    } else {
      flagBtn.classList.remove('active');
      document.getElementById('flag-btn-text').textContent = 'Đánh dấu';
    }

    // Question Prompt & Code
    document.getElementById('question-prompt-text').textContent = q.question;

    const codeBox = document.getElementById('question-code-box');
    const codeEl = document.getElementById('question-code-text');
    if (q.code && q.code.trim()) {
      codeBox.style.display = 'block';
      codeEl.textContent = q.code;
    } else {
      codeBox.style.display = 'none';
      codeEl.textContent = '';
    }

    // Options List
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const labels = ['A', 'B', 'C', 'D'];
    const chosen = userAnswers[currentQIndex];
    const isAnswered = chosen !== undefined;

    q.options.forEach((optText, optIdx) => {
      if (!optText) return;
      const optBtn = document.createElement('div');
      optBtn.className = 'option-item';
      if (chosen === optIdx) {
        optBtn.classList.add('selected');
      }

      let badgeHtml = '';
      // In study/instant mode: reveal answer immediately if answered
      if (quizMode === 'study' && isAnswered) {
        optBtn.classList.add('locked');
        if (optIdx === q.correctAnswer) {
          if (chosen === optIdx) {
            optBtn.classList.add('correct');
            badgeHtml = '<div class="opt-badge badge-correct">✓ Chính Xác</div>';
          } else {
            optBtn.classList.add('show-correct');
            badgeHtml = '<div class="opt-badge badge-key">👈 Đáp Án Đúng</div>';
          }
        } else if (chosen === optIdx) {
          optBtn.classList.add('incorrect');
          badgeHtml = '<div class="opt-badge badge-wrong">✕ Bạn Chọn Sai</div>';
        }
      }

      optBtn.innerHTML = `
        <div class="option-key">${labels[optIdx] || optIdx + 1}</div>
        <div class="option-text">${optText}</div>
        ${badgeHtml}
      `;

      optBtn.addEventListener('click', () => {
        selectOption(optIdx);
      });

      optionsContainer.appendChild(optBtn);
    });

    // Explanation Box (In Study mode when answered)
    const explBox = document.getElementById('explanation-box');
    const resultRow = document.getElementById('explanation-result-row');
    const explText = document.getElementById('explanation-text');

    if (quizMode === 'study' && isAnswered) {
      explBox.style.display = 'block';
      const isRight = chosen === q.correctAnswer;
      const rightLetter = labels[q.correctAnswer] || 'A';
      const rightOptText = q.options[q.correctAnswer] || '';

      if (isRight) {
        explBox.className = 'explanation-card';
        if (resultRow) {
          resultRow.innerHTML = `
            <div class="result-status correct">
              <span>🎉 CHÍNH XÁC!</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--success); font-weight: 600;">
              Lựa chọn của bạn hoàn toàn chính xác
            </div>
          `;
        }
      } else {
        explBox.className = 'explanation-card is-wrong';
        if (resultRow) {
          resultRow.innerHTML = `
            <div class="result-status wrong">
              <span>❌ CHƯA ĐÚNG!</span>
            </div>
            <button class="btn-retry-q" id="btn-retry-q" title="Bấm để thử chọn lại câu hỏi này">
              🔄 Làm lại câu này
            </button>
          `;
        }
      }

      let explDetailsHtml = `
        <div class="expl-header-ans">
          <span class="expl-label">Đáp án đúng:</span>
          <span class="expl-badge-key">${rightLetter}. ${escapeHtml(rightOptText)}</span>
        </div>
      `;

      if (q.explanation) {
        explDetailsHtml += `
          <div class="expl-block expl-why-block">
            <div class="expl-block-title">
              <span class="expl-block-icon">💡</span>
              <strong>Vì sao chọn đáp án này?</strong>
            </div>
            <div class="expl-block-content">
              ${escapeHtml(q.explanation)}
            </div>
          </div>
        `;
      }

      if (q.tip) {
        explDetailsHtml += `
          <div class="expl-block expl-tip-block">
            <div class="expl-block-title">
              <span class="expl-block-icon">🎯</span>
              <strong>Mẹo nhớ nhanh khi vào phòng thi:</strong>
            </div>
            <div class="expl-block-content">
              ${escapeHtml(q.tip)}
            </div>
          </div>
        `;
      }

      explText.innerHTML = explDetailsHtml;

      const retryBtn = document.getElementById('btn-retry-q');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          sound.playClick();
          delete userAnswers[currentQIndex];
          renderCurrentQuestion();
          renderPalette();
        });
      }
    } else {
      explBox.style.display = 'none';
      explText.textContent = '';
      if (resultRow) resultRow.innerHTML = '';
    }

    // Prev / Next button state
    document.getElementById('btn-prev-question').disabled = currentQIndex === 0;
    const nextBtn = document.getElementById('btn-next-question');
    if (currentQIndex === total - 1) {
      nextBtn.textContent = 'Hoàn thành 🏁';
    } else {
      nextBtn.textContent = 'Câu tiếp ➡';
    }
  }

  function togglePlayerMode() {
    sound.playClick();
    quizMode = (quizMode === 'study' ? 'exam' : 'study');
    updatePlayerModeBadge();
    renderCurrentQuestion();
    showToast(
      quizMode === 'study' 
        ? 'Đã bật: Hiện Đúng/Sai Ngay ⚡ (Bấm là biết kết quả)' 
        : 'Đã bật: Chế độ Thi Thử ⏱️ (Nộp bài mới chấm điểm)',
      'info'
    );
  }

  function updatePlayerModeBadge() {
    const badge = document.getElementById('player-mode-badge');
    const icon = document.getElementById('player-mode-icon');
    const pill = document.getElementById('player-mode-toggle-btn');
    if (!badge || !icon || !pill) return;

    if (quizMode === 'study') {
      badge.textContent = 'Hiện Đúng/Sai Ngay';
      icon.textContent = '⚡';
      pill.classList.remove('is-exam');
    } else {
      badge.textContent = 'Thi Thử (Tính Giờ)';
      icon.textContent = '⏱️';
      pill.classList.add('is-exam');
    }
  }

  function selectOption(optIndex) {
    if (quizMode === 'study' && userAnswers[currentQIndex] !== undefined) {
      return;
    }

    userAnswers[currentQIndex] = optIndex;
    const q = activeQuestions[currentQIndex];

    if (quizMode === 'study') {
      if (optIndex === q.correctAnswer) {
        sound.playChime();
        confetti.fire();
      } else {
        sound.playBuzzer();
        // Auto-save wrong question to mistake notebook
        const noteId = q._originalId || q.id;
        mistakeNotebook[noteId] = {
          id: noteId,
          question: q.question,
          code: q.code || '',
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation || '',
          tip: q.tip || '',
          addedAt: new Date().toISOString(),
          quizTitle: activeQuiz ? activeQuiz.title : 'Luyện tập'
        };
        saveMistakeNotebook();
      }
    } else {
      sound.playClick();
    }

    renderCurrentQuestion();
    renderPalette();
  }

  function renderPalette() {
    const grid = document.getElementById('palette-buttons-grid');
    grid.innerHTML = '';

    activeQuestions.forEach((_, idx) => {
      const btn = document.createElement('div');
      btn.className = 'palette-num';
      btn.textContent = idx + 1;

      if (userAnswers[idx] !== undefined) btn.classList.add('answered');
      if (flaggedQuestions.has(idx)) btn.classList.add('flagged');
      if (idx === currentQIndex) btn.classList.add('current');

      btn.addEventListener('click', () => {
        sound.playClick();
        currentQIndex = idx;
        renderCurrentQuestion();
        renderPalette();
        document.getElementById('palette-modal').style.display = 'none';
      });

      grid.appendChild(btn);
    });
  }

  function submitQuizSession() {
    clearInterval(timerInterval);
    sound.playClick();

    // Check unanswered questions
    const total = activeQuestions.length;
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount < total) {
      const remaining = total - answeredCount;
      const confirmSubmit = confirm(`Bạn còn ${remaining} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài ngay không?`);
      if (!confirmSubmit) return;
    }

    // Calculate score
    let correctCount = 0;
    activeQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const wrongCount = total - correctCount;
    const accuracy = Math.round((correctCount / total) * 100);

    // Save record
    if (activeQuiz) {
      saveHistoryRecord(activeQuiz.id, correctCount, total);
    }

    // Sound effect / Confetti
    if (accuracy >= 80) {
      sound.playFanfare();
      confetti.burst();
    } else if (accuracy >= 50) {
      sound.playChime();
    } else {
      sound.playBuzzer();
    }

    // Auto-save wrong questions to mistake notebook
    activeQuestions.forEach((q, idx) => {
      if (userAnswers[idx] !== q.correctAnswer) {
        const noteId = q._originalId || q.id || `q_${idx}`;
        mistakeNotebook[noteId] = {
          id: noteId,
          question: q.question,
          code: q.code || '',
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation || '',
          tip: q.tip || '',
          addedAt: new Date().toISOString(),
          quizTitle: activeQuiz ? activeQuiz.title : 'Bài luyện'
        };
      }
    });
    saveMistakeNotebook();

    // Switch View to Result
    document.getElementById('view-player').style.display = 'none';
    document.getElementById('view-result').style.display = 'block';

    // Populate Results
    document.getElementById('result-score-num').textContent = correctCount;
    document.getElementById('result-score-total').textContent = `/ ${total} câu`;
    document.getElementById('result-accuracy-pct').textContent = `${accuracy}%`;
    document.getElementById('result-correct-count').textContent = correctCount;
    document.getElementById('result-wrong-count').textContent = wrongCount;

    const minsSpent = Math.floor(totalTimeSpentSeconds / 60);
    const secsSpent = totalTimeSpentSeconds % 60;
    document.getElementById('result-time-spent').textContent = 
      `${String(minsSpent).padStart(2, '0')}:${String(secsSpent).padStart(2, '0')}`;

    const verdictEl = document.getElementById('result-verdict-title');
    const subEl = document.getElementById('result-subtitle-text');
    if (accuracy >= 90) {
      verdictEl.textContent = '🏆 Xuất Sắc!';
      subEl.textContent = 'Bạn nắm kiến thức rất vững vàng và chuẩn xác!';
    } else if (accuracy >= 75) {
      verdictEl.textContent = '🎉 Giỏi Lắm!';
      subEl.textContent = 'Kết quả rất tốt, chỉ cần ôn lại một vài câu thiếu sót.';
    } else if (accuracy >= 50) {
      verdictEl.textContent = '👍 Đạt Yêu Cầu!';
      subEl.textContent = 'Bạn đã vượt qua bài thi, nên luyện tập thêm các phần sai.';
    } else {
      verdictEl.textContent = '💪 Cần Cố Gắng!';
      subEl.textContent = 'Hãy ôn tập lại lý thuyết và làm lại bài thi để củng cố kiến thức nhé.';
    }

    // Show/hide "Thi Đề 40 Câu Mới" button
    const btnRetryNew40 = document.getElementById('btn-retry-new-40');
    if (btnRetryNew40) {
      if ((activeQuiz && activeQuiz.id && activeQuiz.id.startsWith('mock_40')) || activeQuestions.length === 40) {
        btnRetryNew40.style.display = 'inline-flex';
      } else {
        btnRetryNew40.style.display = 'none';
      }
    }

    renderReviewCards('all');
  }

  // ---------------------------------------------------------------------------
  // 8. RESULT & DETAILED REVIEW RENDERER
  // ---------------------------------------------------------------------------
  let currentReviewFilter = 'all';

  function renderReviewCards(filter = 'all') {
    currentReviewFilter = filter;
    const container = document.getElementById('review-cards-list');
    container.innerHTML = '';

    const labels = ['A', 'B', 'C', 'D'];

    activeQuestions.forEach((q, idx) => {
      const userChoice = userAnswers[idx];
      const isCorrect = userChoice === q.correctAnswer;
      const isFlagged = flaggedQuestions.has(idx);

      if (filter === 'wrong' && isCorrect) return;
      if (filter === 'flagged' && !isFlagged) return;

      const card = document.createElement('div');
      card.className = `review-card ${isCorrect ? 'correct-border' : 'wrong-border'}`;

      const statusHtml = isCorrect 
        ? `<span class="review-status-tag correct">✅ Đúng</span>`
        : `<span class="review-status-tag wrong">❌ Sai</span>`;

      let codeHtml = '';
      if (q.code && q.code.trim()) {
        codeHtml = `
          <div class="code-box">
            <div class="code-header"><span>Java Source</span></div>
            <pre class="code-body"><code>${escapeHtml(q.code)}</code></pre>
          </div>
        `;
      }

      let optionsHtml = '<div class="options-list" style="margin-top: 1rem;">';
      q.options.forEach((optText, optIdx) => {
        if (!optText) return;
        let optClass = 'option-item locked';
        if (optIdx === q.correctAnswer) {
          optClass += ' correct';
        } else if (userChoice === optIdx) {
          optClass += ' incorrect';
        }

        optionsHtml += `
          <div class="${optClass}">
            <div class="option-key">${labels[optIdx] || optIdx + 1}</div>
            <div class="option-text">${escapeHtml(optText)}</div>
          </div>
        `;
      });
      optionsHtml += '</div>';

      const userLetter = userChoice !== undefined ? labels[userChoice] : 'Chưa chọn';
      const correctLetter = labels[q.correctAnswer] || 'A';

      card.innerHTML = `
        <div class="review-card-header">
          <span>Câu ${idx + 1} / ${activeQuestions.length}</span>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            ${isFlagged ? '<span style="color: var(--warning); font-size: 0.8rem;">🚩 Đã gắn cờ</span>' : ''}
            ${statusHtml}
          </div>
        </div>
        <h4 style="font-size: 1.1rem; line-height: 1.45; margin-bottom: 0.75rem;">${escapeHtml(q.question)}</h4>
        ${codeHtml}
        ${optionsHtml}
        <div class="explanation-card" style="display: block; margin-top: 1.25rem;">
          <div class="expl-header-ans">
            <span class="expl-label">Lựa chọn của bạn: <strong>${userLetter}</strong> | Đáp án đúng:</span>
            <span class="expl-badge-key">${correctLetter}. ${escapeHtml((q.options && q.options[q.correctAnswer]) || '')}</span>
          </div>
          ${q.explanation ? `
          <div class="expl-block expl-why-block">
            <div class="expl-block-title"><span class="expl-block-icon">💡</span> <strong>Vì sao chọn đáp án này:</strong></div>
            <div class="expl-block-content">${escapeHtml(q.explanation)}</div>
          </div>
          ` : ''}
          ${q.tip ? `
          <div class="expl-block expl-tip-block">
            <div class="expl-block-title"><span class="expl-block-icon">🎯</span> <strong>Mẹo nhớ nhanh khi vào phòng thi:</strong></div>
            <div class="expl-block-content">${escapeHtml(q.tip)}</div>
          </div>
          ` : ''}
        </div>
      `;

      container.appendChild(card);
    });

    if (container.children.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          Không có câu hỏi nào theo bộ lọc này.
        </div>
      `;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ---------------------------------------------------------------------------
  // 9. QUIZ BUILDER & EDIT MODAL
  // ---------------------------------------------------------------------------
  let editingQuizId = null;
  let manualQuestionsList = [];

  function openQuizEditor(quizId = null) {
    editingQuizId = quizId;
    const modal = document.getElementById('quiz-builder-modal');
    modal.style.display = 'flex';

    if (quizId) {
      const q = allQuizSets.find(s => s.id === quizId);
      if (q) {
        document.getElementById('builder-modal-title').textContent = 'Chỉnh Sửa Bộ Đề';
        document.getElementById('builder-quiz-title').value = q.title;
        document.getElementById('builder-quiz-category').value = q.category || 'Tự tạo';
        document.getElementById('builder-quiz-duration').value = q.durationMinutes || 25;
        manualQuestionsList = JSON.parse(JSON.stringify(q.questions || []));
        updateManualAddedSummary();
      }
    } else {
      document.getElementById('builder-modal-title').textContent = 'Tạo Bộ Đề Trắc Nghiệm Mới';
      document.getElementById('builder-quiz-title').value = '';
      document.getElementById('builder-quiz-category').value = 'Tự tạo';
      document.getElementById('builder-quiz-duration').value = 25;
      document.getElementById('builder-quick-text-input').value = '';
      document.getElementById('builder-parse-status').style.display = 'none';
      manualQuestionsList = [];
      updateManualAddedSummary();
    }
  }

  function closeQuizEditor() {
    document.getElementById('quiz-builder-modal').style.display = 'none';
    editingQuizId = null;
  }

  function updateManualAddedSummary() {
    const el = document.getElementById('manual-added-summary');
    el.textContent = `Đã có trong đề: ${manualQuestionsList.length} câu hỏi.`;
  }

  function deleteQuizSet(quizId) {
    const q = allQuizSets.find(s => s.id === quizId);
    if (!q) return;
    const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa bộ đề "${q.title}" không?`);
    if (!confirmDelete) return;

    allQuizSets = allQuizSets.filter(s => s.id !== quizId);
    saveQuizzesToStorage();
    renderDashboard();
    showToast(`Đã xóa bộ đề "${q.title}"`, 'info');
  }

  function restoreDefaultQuizzes() {
    const confirmReset = confirm('Bạn có chắc chắn muốn khôi phục lại toàn bộ 320 câu Java + 260 câu DBMS gốc không? Các đề bạn tự tạo sẽ được giữ lại.');
    if (!confirmReset) return;

    const defaultSets = (window.DEFAULT_QUIZZES || []).concat(window.DBMS_QUIZZES || []);
    if (defaultSets.length > 0) {
      // Keep custom quizzes
      const customSets = allQuizSets.filter(s => s.category === 'Tự tạo' && !defaultSets.some(d => d.id === s.id));
      allQuizSets = JSON.parse(JSON.stringify(defaultSets)).concat(customSets);
      ensureMock40Sets();
      saveQuizzesToStorage();
      renderDashboard();
      showToast('Đã khôi phục thành công 320 câu Java + 260 câu DBMS!', 'success');
    } else {
      showToast('Không tìm thấy dữ liệu mặc định!', 'error');
    }
  }

  // ---------------------------------------------------------------------------
  // 9.5. MISTAKE NOTEBOOK (SỔ TAY CÂU SAI)
  // ---------------------------------------------------------------------------
  function openMistakeNotebook() {
    renderNotebook();
    const modal = document.getElementById('mistake-notebook-modal');
    if (modal) modal.style.display = 'flex';
  }

  function closeMistakeNotebook() {
    const modal = document.getElementById('mistake-notebook-modal');
    if (modal) modal.style.display = 'none';
  }

  function removeMistakeItem(id) {
    if (mistakeNotebook[id]) {
      delete mistakeNotebook[id];
      saveMistakeNotebook();
      renderNotebook();
      showToast('Đã xóa câu hỏi khỏi Sổ tay.', 'info');
    }
  }

  function renderNotebook() {
    const listEl = document.getElementById('notebook-questions-list');
    const statsEl = document.getElementById('notebook-stats');
    if (!listEl || !statsEl) return;

    const items = Object.values(mistakeNotebook);
    statsEl.textContent = `Tổng cộng: ${items.length} câu đã làm sai cần ôn lại`;

    if (items.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
          <div style="font-size: 3rem; margin-bottom: 0.75rem;">🎉</div>
          <div style="font-weight: 600; font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.35rem;">Sổ tay đang trống!</div>
          <p>Khi bạn làm bài thi hoặc ôn tập, các câu trả lời sai sẽ tự động được ghi nhớ vào đây để bạn luyện lại bất cứ lúc nào.</p>
        </div>
      `;
      return;
    }

    const labels = ['A', 'B', 'C', 'D'];
    listEl.innerHTML = items.map((item, idx) => {
      const correctText = (item.options && item.options[item.correctAnswer]) || '';
      return `
        <div class="mistake-item" style="background: var(--surface-card); border: 1px solid var(--surface-border); border-radius: var(--radius-lg); padding: 1rem 1.25rem; margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.5rem;">
            <div style="font-weight: 700; color: var(--accent-primary); font-size: 0.85rem;">
              Câu ${idx + 1} • <span style="color: var(--text-secondary); font-weight: 400;">${item.quizTitle || 'Trắc nghiệm'}</span>
            </div>
            <button class="btn btn-ghost" style="padding: 2px 8px; font-size: 0.75rem; color: var(--color-danger);" onclick="window.removeMistakeItem('${item.id}')">
              🗑 Xóa câu này
            </button>
          </div>
          <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem; line-height: 1.5;">
            ${item.question}
          </div>
          ${item.code ? `<pre style="background: var(--code-bg); padding: 0.6rem; border-radius: 6px; font-size: 0.82rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>${item.code}</code></pre>` : ''}
          <div style="font-size: 0.88rem; color: var(--color-success); background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--color-success); padding: 0.45rem 0.75rem; border-radius: 4px; margin-bottom: 0.5rem;">
            <strong>Đáp án đúng (${labels[item.correctAnswer] || 'A'}):</strong> ${correctText}
          </div>
          ${item.explanation ? `
          <div class="expl-block expl-why-block" style="margin-bottom: 0.5rem; font-size: 0.85rem;">
            <div class="expl-block-title"><span class="expl-block-icon">💡</span> <strong>Vì sao chọn đáp án này:</strong></div>
            <div class="expl-block-content">${escapeHtml(item.explanation)}</div>
          </div>
          ` : ''}
          ${item.tip ? `
          <div class="expl-block expl-tip-block" style="font-size: 0.85rem;">
            <div class="expl-block-title"><span class="expl-block-icon">🎯</span> <strong>Mẹo nhớ nhanh khi vào phòng thi:</strong></div>
            <div class="expl-block-content">${escapeHtml(item.tip)}</div>
          </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  window.removeMistakeItem = removeMistakeItem;

  // ---------------------------------------------------------------------------
  // 10. EVENT HANDLERS & INITIALIZATION
  // ---------------------------------------------------------------------------
  function setupEventListeners() {
    // Brand Home Button
    document.getElementById('brand-home-btn').addEventListener('click', () => {
      sound.playClick();
      clearInterval(timerInterval);
      document.getElementById('view-player').style.display = 'none';
      document.getElementById('view-result').style.display = 'none';
      document.getElementById('view-dashboard').style.display = 'block';
      renderDashboard();
    });

    // Theme Toggle
    const themeBtn = document.getElementById('btn-toggle-theme');
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      themeBtn.textContent = next === 'dark' ? '🌙' : '☀️';
      localStorage.setItem('wayquizz_theme', next);
    });
    const savedTheme = localStorage.getItem('wayquizz_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeBtn.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }

    // Sound Toggle
    const soundBtn = document.getElementById('btn-toggle-sound');
    soundBtn.textContent = sound.enabled ? '🔊' : '🔇';
    soundBtn.addEventListener('click', () => {
      const isEnabled = sound.toggle();
      soundBtn.textContent = isEnabled ? '🔊' : '🔇';
      showToast(isEnabled ? 'Đã bật âm thanh hiệu ứng 🔊' : 'Đã tắt âm thanh 🔇', 'info');
    });

    // Restore Defaults Button
    document.getElementById('btn-restore-defaults').addEventListener('click', restoreDefaultQuizzes);

    // Create Modal Open & Close
    document.getElementById('btn-open-create-modal').addEventListener('click', () => openQuizEditor());
    document.getElementById('builder-modal-close-btn').addEventListener('click', closeQuizEditor);
    document.getElementById('builder-cancel-btn').addEventListener('click', closeQuizEditor);

    // Hero Mode Segmented Selector
    let heroSelectedMode = 'study';
    const modeBtnStudy = document.getElementById('btn-mode-study');
    const modeBtnExam = document.getElementById('btn-mode-exam');

    if (modeBtnStudy && modeBtnExam) {
      modeBtnStudy.addEventListener('click', () => {
        sound.playClick();
        heroSelectedMode = 'study';
        modeBtnStudy.classList.add('active');
        modeBtnExam.classList.remove('active');
        showToast('Đã chọn: Chế độ Hiện Đúng / Sai Ngay ⚡', 'info');
      });

      modeBtnExam.addEventListener('click', () => {
        sound.playClick();
        heroSelectedMode = 'exam';
        modeBtnExam.classList.add('active');
        modeBtnStudy.classList.remove('active');
        showToast('Đã chọn: Chế độ Thi Thử (Tính giờ) ⏱️', 'info');
      });
    }

    // Hero Banner Quick Buttons
    document.getElementById('btn-quick-full-test').addEventListener('click', () => {
      const mega = allQuizSets.find(s => s.id === 'java_mega_full_320');
      if (mega) startQuizSession(mega.id, heroSelectedMode);
      else showToast('Đang tải đề thi...', 'info');
    });

    const btnDbms = document.getElementById('btn-quick-dbms-test');
    if (btnDbms) {
      btnDbms.addEventListener('click', () => {
        const dbms = allQuizSets.find(s => s.id === 'dbms_mega_full_260' || s.id === 'dbms_mega_full_118');
        if (dbms) startQuizSession(dbms.id, heroSelectedMode);
        else showToast('Đang tải đề DBMS...', 'info');
      });
    }

    // Mock 40 Exam Modal Controls
    let selectedMockSubject = 'java';
    let selectedMockTime = 40;
    let selectedMockMode = 'exam';

    const btnHeaderMock = document.getElementById('btn-header-mock-40');
    if (btnHeaderMock) {
      btnHeaderMock.addEventListener('click', openMock40Modal);
    }

    const btnHeroMock = document.getElementById('btn-hero-mock-40');
    if (btnHeroMock) {
      btnHeroMock.addEventListener('click', openMock40Modal);
    }

    const mockCloseBtn = document.getElementById('mock-40-close-btn');
    if (mockCloseBtn) mockCloseBtn.addEventListener('click', closeMock40Modal);
    const mockCancelBtn = document.getElementById('mock-40-cancel-btn');
    if (mockCancelBtn) mockCancelBtn.addEventListener('click', closeMock40Modal);

    // Subject selection cards
    const subjectCards = document.querySelectorAll('.mock-subject-card');
    subjectCards.forEach(card => {
      card.addEventListener('click', () => {
        sound.playClick();
        subjectCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedMockSubject = card.getAttribute('data-subject') || 'java';
      });
    });

    // Time selection buttons
    const timeBtns = document.querySelectorAll('.mock-time-btn');
    timeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedMockTime = parseInt(btn.getAttribute('data-time'), 10);
      });
    });

    // Mode selection cards
    const modeCards = document.querySelectorAll('.mock-mode-card');
    modeCards.forEach(card => {
      card.addEventListener('click', () => {
        sound.playClick();
        modeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedMockMode = card.getAttribute('data-mode') || 'exam';
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    // Start 40 questions button inside modal
    const btnStartMockNow = document.getElementById('btn-start-mock-40-now');
    if (btnStartMockNow) {
      btnStartMockNow.addEventListener('click', () => {
        startMock40Exam(selectedMockSubject, selectedMockTime, selectedMockMode);
      });
    }

    // Player header mode toggle button
    const playerModeToggleBtn = document.getElementById('player-mode-toggle-btn');
    if (playerModeToggleBtn) {
      playerModeToggleBtn.addEventListener('click', () => togglePlayerMode());
    }

    // Mistake notebook buttons
    const openNotebook = () => openMistakeNotebook();
    document.getElementById('btn-open-mistake-notebook').addEventListener('click', openNotebook);
    document.getElementById('btn-open-mistake-notebook-hero').addEventListener('click', openNotebook);
    document.getElementById('notebook-close-btn').addEventListener('click', closeMistakeNotebook);
    document.getElementById('btn-clear-notebook').addEventListener('click', () => {
      if (confirm('B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n x\u00f3a to\u00e0n b\u1ed9 s\u1ed5 tay c\u00e2u sai kh\u00f4ng?')) {
        mistakeNotebook = {};
        saveMistakeNotebook();
        renderNotebook();
        showToast('\u0110\u00e3 x\u00f3a s\u1ed5 tay!', 'info');
      }
    });
    document.getElementById('btn-practice-notebook').addEventListener('click', () => {
      const noteList = Object.values(mistakeNotebook);
      if (noteList.length === 0) {
        showToast('S\u1ed5 tay tr\u1ed1ng! H\u00e3y l\u00e0m b\u00e0i tr\u01b0\u1edbc.', 'info');
        return;
      }
      closeMistakeNotebook();
      // Map notebook items to quiz format
      const qs = noteList.map(n => ({
        id: n.id, question: n.question, code: n.code || '',
        options: n.options, correctAnswer: n.correctAnswer, explanation: n.explanation
      }));
      startQuizSession(null, 'study', qs);
      activeQuiz = { title: 'S\u1ed5 Tay C\u00e2u Sai', id: '__notebook__', durationMinutes: Math.ceil(qs.length * 1.5) };
      document.getElementById('player-quiz-title').textContent = 'S\u1ed5 Tay C\u00e2u Sai';
    });

    // Save wrong questions from result view to notebook
    document.getElementById('btn-save-wrong-to-notebook').addEventListener('click', () => {
      const wrongList = activeQuestions.filter((q, idx) => userAnswers[idx] !== q.correctAnswer);
      if (wrongList.length === 0) {
        showToast('Kh\u00f4ng c\u00f3 c\u00e2u sai n\u00e0o!', 'success');
        return;
      }
      wrongList.forEach(q => {
        const noteId = q._originalId || q.id;
        mistakeNotebook[noteId] = {
          id: noteId, question: q.question, code: q.code || '',
          options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation || '',
          addedAt: new Date().toISOString(),
          quizTitle: activeQuiz ? activeQuiz.title : 'B\u00e0i luy\u1ec7n'
        };
      });
      saveMistakeNotebook();
      showToast(`\u0110\u00e3 l\u01b0u ${wrongList.length} c\u00e2u sai v\u00e0o S\u1ed5 Tay!`, 'success');
    });

    // Search and Category Filter
    document.getElementById('quiz-search-input').addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim();
      renderDashboard();
    });

    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategoryFilter = pill.getAttribute('data-category');
        renderDashboard();
      });
    });

    // Player Navigation Buttons
    document.getElementById('btn-prev-question').addEventListener('click', () => {
      if (currentQIndex > 0) {
        sound.playClick();
        currentQIndex--;
        renderCurrentQuestion();
        renderPalette();
      }
    });

    document.getElementById('btn-next-question').addEventListener('click', () => {
      if (currentQIndex < activeQuestions.length - 1) {
        sound.playClick();
        currentQIndex++;
        renderCurrentQuestion();
        renderPalette();
      } else {
        submitQuizSession();
      }
    });

    document.getElementById('btn-submit-quiz').addEventListener('click', submitQuizSession);

    // Toggle Flag Button
    document.getElementById('btn-toggle-flag').addEventListener('click', () => {
      sound.playClick();
      if (flaggedQuestions.has(currentQIndex)) {
        flaggedQuestions.delete(currentQIndex);
      } else {
        flaggedQuestions.add(currentQIndex);
      }
      renderCurrentQuestion();
      renderPalette();
    });

    // Question Palette Drawer Open & Close
    document.getElementById('btn-open-palette').addEventListener('click', () => {
      sound.playClick();
      renderPalette();
      document.getElementById('palette-modal').style.display = 'flex';
    });
    document.getElementById('palette-close-btn').addEventListener('click', () => {
      document.getElementById('palette-modal').style.display = 'none';
    });

    // Player Quit Button
    document.getElementById('player-quit-btn').addEventListener('click', () => {
      const confirmQuit = confirm('Bạn có chắc chắn muốn thoát bài thi này không? Tiến độ hiện tại sẽ bị hủy.');
      if (confirmQuit) {
        clearInterval(timerInterval);
        document.getElementById('view-player').style.display = 'none';
        document.getElementById('view-dashboard').style.display = 'block';
        renderDashboard();
      }
    });

    // Copy Code Button
    document.getElementById('btn-copy-code').addEventListener('click', () => {
      const code = document.getElementById('question-code-text').textContent;
      navigator.clipboard.writeText(code).then(() => {
        showToast('Đã sao chép mã nguồn!', 'success');
      });
    });

    // Result Buttons
    document.getElementById('btn-retry-same-quiz').addEventListener('click', () => {
      if (activeQuiz) startQuizSession(activeQuiz.id, quizMode);
      else startQuizSession(null, quizMode, activeQuestions.map(q => ({
        id: q._originalId || q.id, question: q.question, code: q.code,
        options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation
      })));
    });

    document.getElementById('btn-practice-wrong-only').addEventListener('click', () => {
      const wrongList = activeQuestions.filter((q, idx) => userAnswers[idx] !== q.correctAnswer);
      if (wrongList.length === 0) {
        showToast('Bạn đã trả lời đúng tất cả các câu hỏi! 🎉', 'success');
        return;
      }
      startQuizSession(activeQuiz ? activeQuiz.id : 'wrong_practice', 'study', wrongList);
    });

    // "Thi Đề 40 Câu Mới" button in Result view
    const btnRetryNew40 = document.getElementById('btn-retry-new-40');
    if (btnRetryNew40) {
      btnRetryNew40.addEventListener('click', () => {
        startMock40Exam(lastMockConfig.subject || 'java', lastMockConfig.timeMinutes || 40, lastMockConfig.mode || 'exam');
        showToast('🎯 Đã rút ngẫu nhiên 40 câu hỏi mới! Chúc bạn làm bài đạt điểm cao.', 'success');
      });
    }

    document.getElementById('btn-result-back-home').addEventListener('click', () => {
      document.getElementById('view-result').style.display = 'none';
      document.getElementById('view-dashboard').style.display = 'block';
      renderDashboard();
    });

    // Review Filter Tabs
    const reviewFilterBtns = document.querySelectorAll('.review-filter-btn');
    reviewFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        reviewFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderReviewCards(filter);
      });
    });

    // Modal Tabs Navigation
    const modalTabs = document.querySelectorAll('.modal-tab-btn');
    modalTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        sound.playClick();
        modalTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');

        document.getElementById('tab-content-quick-text').style.display = tabId === 'quick-text' ? 'block' : 'none';
        document.getElementById('tab-content-manual-form').style.display = tabId === 'manual-form' ? 'block' : 'none';
        document.getElementById('tab-content-json').style.display = tabId === 'json-tab' ? 'block' : 'none';
      });
    });

    // Quick Text Sample Paste Button
    document.getElementById('btn-paste-sample-syntax').addEventListener('click', () => {
      const sampleText = `Câu 1: Trong Java, kiểu dữ liệu nguyên thủy nào chiếm 8 byte trong bộ nhớ?
A. int
*B. long
C. short
D. byte
Giải thích: Kiểu long chiếm 64 bit (8 byte) trong Java.

Câu 2: Cho đoạn mã sau:
\`\`\`java
String s = "Java";
s.concat(" Core");
System.out.println(s);
\`\`\`
A. Java Core
*B. Java
C. Lỗi biên dịch
D. NullPointerException
Giải thích: Lớp String là bất biến (immutable), phương thức concat() trả về chuỗi mới chứ không thay đổi s.

Câu 3: Bộ thu gom rác (Garbage Collector) trong Java hoạt động ở vùng nhớ nào?
A. Stack
B. Metaspace
*C. Heap
D. Register
Đáp án: C
Giải thích: Tất cả đối tượng được khởi tạo bằng 'new' đều nằm trên Heap và được GC quản lý.`;

      document.getElementById('builder-quick-text-input').value = sampleText;
      triggerQuickTextParsePreview();
    });

    // Quick Text Input Live Preview
    const quickTextInput = document.getElementById('builder-quick-text-input');
    quickTextInput.addEventListener('input', triggerQuickTextParsePreview);

    function triggerQuickTextParsePreview() {
      const text = quickTextInput.value;
      const statusEl = document.getElementById('builder-parse-status');
      if (!text.trim()) {
        statusEl.style.display = 'none';
        return;
      }

      const parsed = parseQuickText(text);
      statusEl.style.display = 'block';
      if (parsed.length > 0) {
        statusEl.className = 'parse-preview-status success';
        statusEl.textContent = `✅ Đã phân tích thành công: ${parsed.length} câu hỏi hợp lệ sẵn sàng lưu!`;
      } else {
        statusEl.className = 'parse-preview-status error';
        statusEl.textContent = `⚠️ Chưa nhận diện được câu hỏi nào. Hãy kiểm tra lại cú pháp hoặc bấm "Dán đoạn văn bản mẫu" để tham khảo.`;
      }
    }

    // Manual Form Add Question Button
    document.getElementById('btn-manual-add-q').addEventListener('click', () => {
      const qText = document.getElementById('manual-q-text').value.trim();
      const qCode = document.getElementById('manual-q-code').value.trim();
      const opts = [
        document.getElementById('manual-opt-0').value.trim(),
        document.getElementById('manual-opt-1').value.trim(),
        document.getElementById('manual-opt-2').value.trim(),
        document.getElementById('manual-opt-3').value.trim()
      ];
      const correctRadios = document.getElementsByName('manual-correct');
      let correctIdx = 0;
      for (const r of correctRadios) {
        if (r.checked) {
          correctIdx = parseInt(r.value, 10);
          break;
        }
      }
      const expl = document.getElementById('manual-q-expl').value.trim();

      if (!qText) {
        showToast('Vui lòng nhập nội dung câu hỏi!', 'error');
        return;
      }
      if (!opts[0] || !opts[1]) {
        showToast('Vui lòng nhập ít nhất 2 đáp án lựa chọn!', 'error');
        return;
      }

      manualQuestionsList.push({
        id: `manual_q_${Date.now()}`,
        question: qText,
        code: qCode,
        options: opts,
        correctAnswer: correctIdx,
        explanation: expl || 'Đáp án theo người biên soạn.'
      });

      // Clear fields
      document.getElementById('manual-q-text').value = '';
      document.getElementById('manual-q-code').value = '';
      document.getElementById('manual-opt-0').value = '';
      document.getElementById('manual-opt-1').value = '';
      document.getElementById('manual-opt-2').value = '';
      document.getElementById('manual-opt-3').value = '';
      document.getElementById('manual-q-expl').value = '';

      updateManualAddedSummary();
      showToast('Đã thêm câu hỏi vào danh sách!', 'success');
    });

    // Save Quiz Button (Supports Quick Text & Manual Form)
    document.getElementById('builder-save-quiz-btn').addEventListener('click', () => {
      const title = document.getElementById('builder-quiz-title').value.trim();
      const category = document.getElementById('builder-quiz-category').value.trim() || 'Tự tạo';
      const duration = parseInt(document.getElementById('builder-quiz-duration').value, 10) || 25;

      if (!title) {
        showToast('Vui lòng nhập tên bộ đề trắc nghiệm!', 'error');
        return;
      }

      // Check which tab has questions
      let finalQuestions = [];
      const quickTextVal = document.getElementById('builder-quick-text-input').value.trim();

      if (quickTextVal) {
        finalQuestions = parseQuickText(quickTextVal);
      }

      if (manualQuestionsList.length > 0) {
        finalQuestions = finalQuestions.concat(manualQuestionsList);
      }

      if (finalQuestions.length === 0) {
        showToast('Vui lòng thêm ít nhất 1 câu hỏi hợp lệ bằng văn bản hoặc form thủ công!', 'error');
        return;
      }

      if (editingQuizId) {
        // Update existing quiz
        const qIdx = allQuizSets.findIndex(s => s.id === editingQuizId);
        if (qIdx >= 0) {
          allQuizSets[qIdx].title = title;
          allQuizSets[qIdx].category = category;
          allQuizSets[qIdx].durationMinutes = duration;
          allQuizSets[qIdx].questions = finalQuestions;
        }
        showToast(`Đã cập nhật bộ đề "${title}"!`, 'success');
      } else {
        // Create new quiz
        const newQuiz = {
          id: `custom_set_${Date.now()}`,
          title: title,
          description: `Bộ đề tự tạo gồm ${finalQuestions.length} câu hỏi.`,
          category: category,
          badge: `${finalQuestions.length} câu`,
          icon: '✨',
          durationMinutes: duration,
          questions: finalQuestions
        };
        allQuizSets.unshift(newQuiz);
        showToast(`Đã tạo bộ đề mới "${title}" với ${finalQuestions.length} câu hỏi!`, 'success');
      }

      saveQuizzesToStorage();
      closeQuizEditor();
      renderDashboard();
    });

    // JSON Export / Import
    document.getElementById('btn-import-export-open') && document.getElementById('btn-import-export-open').addEventListener('click', () => {
      openQuizEditor();
      document.getElementById('tab-btn-json').click();
    });

    document.getElementById('btn-export-all-json').addEventListener('click', () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(allQuizSets, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', 'WayQuizz_Core_Java_Quizzes.json');
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Đã tải xuống file JSON sao lưu!', 'success');
    });

    document.getElementById('input-import-json-file').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (Array.isArray(parsed) && parsed.length > 0) {
            allQuizSets = parsed;
            saveQuizzesToStorage();
            renderDashboard();
            closeQuizEditor();
            showToast(`Đã nhập thành công ${parsed.length} bộ đề từ file JSON!`, 'success');
          } else {
            showToast('File JSON không đúng định dạng danh sách bộ đề.', 'error');
          }
        } catch (err) {
          showToast('Lỗi đọc file JSON: ' + err.message, 'error');
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('btn-import-raw-json').addEventListener('click', () => {
      const raw = document.getElementById('json-raw-textarea').value.trim();
      if (!raw) return;
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          allQuizSets = parsed.concat(allQuizSets);
          saveQuizzesToStorage();
          renderDashboard();
          closeQuizEditor();
          showToast(`Đã nạp thành công ${parsed.length} bộ đề!`, 'success');
        } else {
          showToast('Dữ liệu JSON phải là một mảng []!', 'error');
        }
      } catch (err) {
        showToast('Mã JSON không hợp lệ!', 'error');
      }
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      const playerView = document.getElementById('view-player');
      if (playerView.style.display !== 'block') return;

      const key = e.key.toUpperCase();
      if (key === '1' || key === 'A') selectOption(0);
      else if (key === '2' || key === 'B') selectOption(1);
      else if (key === '3' || key === 'C') selectOption(2);
      else if (key === '4' || key === 'D') selectOption(3);
      else if (e.key === 'ArrowLeft') document.getElementById('btn-prev-question').click();
      else if (e.key === 'ArrowRight') document.getElementById('btn-next-question').click();
      else if (key === 'F') document.getElementById('btn-toggle-flag').click();
    });
  }

  // ---------------------------------------------------------------------------
  // INITIALIZE APPLICATION
  // ---------------------------------------------------------------------------
  loadQuizzesFromStorage();
  setupEventListeners();
  renderDashboard();

})();
