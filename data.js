// Ngan hang cau hoi Core Java trich xuat day du tu NHCH-Core_Java_formatted
window.DEFAULT_QUIZZES = [
  {
    "id": "java_mega_full_320",
    "title": "Đề Tổng Hợp Toàn Diện (Full 320 Câu Core Java)",
    "description": "Tổng hợp toàn bộ 320 câu hỏi trắc nghiệm từ 16 Module của Ngân hàng câu hỏi Core Java chuẩn. Phù hợp cho ôn thi cuối kỳ và chứng chỉ.",
    "category": "Tổng hợp",
    "badge": "Full Test (320 câu)",
    "icon": "🏆",
    "durationMinutes": 120,
    "questions": [
      {
        "id": "q_1",
        "question": "Which of the Following is not the feature of Java?",
        "code": "",
        "options": [
          "Not Robust.",
          "Object Oriented.",
          "Distributed.",
          "Interpreted"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Not Robust.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 1: Giới thiệu Java & Cú pháp cơ bản'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 1: Giới thiệu Java & Cú pháp cơ bản): Chú ý từ khóa trọng tâm 'Not Robust.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_2",
        "question": "When is the Float object, created in line 3, eligible for garbage collection?",
        "code": "public class Dummy {\n    public Object m() {\n        Object o = new Float(3.14F);\n        Object[] oa = new Object[l];\n        oa[0] = o; /* Line 5 */\n        o = null; /* Line 6 */\n        oa[0] = null; /* Line 7 */\n        return o; /* Line 8 */\n    }\n}",
        "options": [
          "just after line 7",
          "just after line 5",
          "just after line 6",
          "just after line 8"
        ],
        "correctAnswer": 0,
        "explanation": "Một đối tượng chỉ đủ điều kiện dọn rác (Garbage Collection) khi không còn bất kỳ biến tham chiếu còn sống nào trỏ tới nó. Ở đây, tại vị trí dòng được chỉ định, biến tham chiếu đã bị gán lại sang đối tượng khác hoặc ra khỏi phạm vi khối lệnh, khiến đối tượng cũ bị mồ côi trên Heap.",
        "tip": "MẸO PHÒNG THI: Lần theo tên biến tham chiếu: khi biến bị gán giá trị mới hoặc gán null -> Ngay sau dòng đó đối tượng ban đầu được phép dọn rác!"
      },
      {
        "id": "q_3",
        "question": "which is the first web browser developed in Java?",
        "code": "",
        "options": [
          "Internet Explorer",
          "HotJava",
          "Netscape Navigator",
          "Opera"
        ],
        "correctAnswer": 1,
        "explanation": "HotJava là trình duyệt web mô-đun đầu tiên được Sun Microsystems viết hoàn toàn bằng Java, là nơi đầu tiên hỗ trợ thực thi Java Applet tương tác trên trang web.",
        "tip": "MẸO PHÒNG THI: Trình duyệt web đầu tiên viết bằng Java -> Chọn 'HotJava'!"
      },
      {
        "id": "q_4",
        "question": "Which is a valid declaration of a String?",
        "code": "",
        "options": [
          "String s4 = (String) '\\ufeed';",
          "String s3 = (String) 'abc';",
          "String s2 = 'null';",
          "String s1 = null;"
        ],
        "correctAnswer": 3,
        "explanation": "String là kiểu đối tượng tham chiếu trong Java, do đó một biến String có thể được gán giá trị hợp lệ bằng một chuỗi văn bản trong dấu nháy kép (\"\") hoặc khởi tạo bằng `null` (vd: `String s1 = null;`).",
        "tip": "MẸO PHÒNG THI: Biến tham chiếu như String luôn có thể gán `= null`!"
      },
      {
        "id": "q_5",
        "question": "Which one of these lists contains only Java programming language keywords?",
        "code": "",
        "options": [
          "goto, instanceof, native, finally, default, throws",
          "class, if, void, long, Int, continue",
          "try, virtual, throw, final, volatile, transient",
          "strictfp, constant, super, implements, do"
        ],
        "correctAnswer": 0,
        "explanation": "Các từ khóa trong danh sách này đều là từ khóa chuẩn của Java: `goto` (reserved), `instanceof`, `native`, `finally`, `default`, `throws`. Lưu ý: `sizeof` là của C/C++, Java không có; `true/false/null` là literals.",
        "tip": "MẸO PHÒNG THI: Bẫy keyword: 'sizeof' không có trong Java; 'goto' và 'const' dù không dùng nhưng vẫn là keyword dành riêng!"
      },
      {
        "id": "q_6",
        "question": "Which three form part of correct array declarations?\nA. public int a [ ]\nB. static int [ ] a\nC. public [ ] int a\nD. private int a [3]\nE. private int [3] a [ ]\nF. public final int [ ] a",
        "code": "",
        "options": [
          "A,C, D",
          "A, B, F",
          "B, D, E",
          "B, E, F"
        ],
        "correctAnswer": 1,
        "explanation": "Khai báo mảng trong Java: Cú pháp hợp lệ cho phép dấu ngoặc vuông `[]` đứng sau kiểu dữ liệu (vd: `int[] a`) hoặc đứng sau tên biến (vd: `int a[]`), có thể kết hợp với các modifier như `public`, `static`, `final`. ĐẶC BIỆT: Tuyệt đối KHÔNG ĐƯỢC chỉ định kích thước trong ngoặc vuông khi khai báo biến (vd: `int[3] a` là lỗi biên dịch).",
        "tip": "MẸO PHÒNG THI: Khai báo mảng hợp lệ KHÔNG ĐƯỢC có số kích thước trong ngoặc (loại ngay các đáp án có int[3]). Dấu [] có thể đứng cạnh int hoặc cạnh tên biến!"
      },
      {
        "id": "q_7",
        "question": "Which one is a valid declaration and initialization of a boolean?",
        "code": "",
        "options": [
          "boolean b1 = 0;",
          "boolean b2 ;",
          "boolean b3 = false;",
          "boolean b5 = no;"
        ],
        "correctAnswer": 2,
        "explanation": "Trong Java, kiểu `boolean` chỉ nhận đúng hai giá trị logic là hằng số `true` hoặc `false` (viết chữ thường, không đặt trong ngoặc kép). Java không cho phép gán số `0`, `1` hay chuỗi \"true\" cho biến boolean nguyên thủy.",
        "tip": "MẸO PHÒNG THI: boolean chỉ nhận `true` hoặc `false`. Các phép gán boolean b = 0 hay boolean b = (1) đều lỗi biên dịch!"
      },
      {
        "id": "q_8",
        "question": "Which of the following is not primitive datatype?",
        "code": "",
        "options": [
          "int",
          "short",
          "byte",
          "enum"
        ],
        "correctAnswer": 3,
        "explanation": "Java có đúng 8 kiểu dữ liệu nguyên thủy (primitive): byte, short, int, long, float, double, char, boolean. Các kiểu như `enum`, `String`, `Array`, `Interface` hay `Class` đều là kiểu dữ liệu tham chiếu (Reference / Non-primitive types).",
        "tip": "MẸO PHÒNG THI: 'NOT primitive' -> Tìm ngay 'enum', 'String', 'Array' hoặc tên class. 8 kiểu nguyên thủy đều viết chữ thường: byte, short, int, long, float, double, char, boolean!"
      },
      {
        "id": "q_9",
        "question": "Which of the following describes the correct default values for array elements of the types indicated?\n1. int - 0\n2. String - \"null\"\n3. Dog - null\n4. char - '\\u0000'\n5. float - 0.0f\n6. boolean - true",
        "code": "",
        "options": [
          "1, 3, 4, 5",
          "1, 2, 3, 4",
          "3, 4, 5, 6",
          "2, 4, 5, 6"
        ],
        "correctAnswer": 0,
        "explanation": "Giá trị mặc định của các phần tử mảng và thuộc tính trong Java: số nguyên (byte, short, int, long) = 0; số thực (float, double) = 0.0f/0.0d; char = '\\u0000' (ký tự null); boolean = false; mọi đối tượng tham chiếu (String, Dog, Object) = null (chứ không phải chuỗi \"null\").",
        "tip": "MẸO PHÒNG THI: Số = 0, char = '\\u0000', boolean = false, Đối tượng = null (giá trị rỗng, không phải chuỗi chữ \"null\")!"
      },
      {
        "id": "q_10",
        "question": "Public Boolean (boolean value) is used to construct ________.",
        "code": "",
        "options": [
          "Integer object",
          "Boolean object.",
          "Float object",
          "None of this."
        ],
        "correctAnswer": 1,
        "explanation": "Constructor `public Boolean(boolean value)` nhận một giá trị boolean nguyên thủy và tạo ra một đối tượng bao bọc kiểu `Boolean object` trên Heap.",
        "tip": "MẸO PHÒNG THI: Constructor của class Boolean tạo ra 'Boolean object'!"
      },
      {
        "id": "q_11",
        "question": "Java source codes are compiled and converted to _______",
        "code": "",
        "options": [
          "Binary codes",
          "Object codes",
          "Byte codes",
          "Assembly codes"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Byte codes\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 1: Giới thiệu Java & Cú pháp cơ bản'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 1: Giới thiệu Java & Cú pháp cơ bản): Chú ý từ khóa trọng tâm 'Byte codes'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_12",
        "question": "Bytes variables are declared by use of the ______ keyword (using primitive data type).",
        "code": "",
        "options": [
          "Byte",
          "bytes",
          "Bytes",
          "byte"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"byte\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 1: Giới thiệu Java & Cú pháp cơ bản'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 1: Giới thiệu Java & Cú pháp cơ bản): Chú ý từ khóa trọng tâm 'byte'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_13",
        "question": "What is the File Extension of java byte codes?",
        "code": "",
        "options": [
          ".java",
          ".class",
          ".bc",
          "None of the above"
        ],
        "correctAnswer": 1,
        "explanation": "Mã nguồn Java được lưu ở tệp tin `.java`, sau khi được trình biên dịch `javac` biên dịch sẽ tạo ra tệp Bytecode có phần mở rộng là `.class` để chạy trên máy ảo JVM.",
        "tip": "MẸO PHÒNG THI: File mã nguồn = `.java` | File chứa mã máy ảo Bytecode = `.class`!"
      },
      {
        "id": "q_14",
        "question": "Which of the following command is used to compile the java application through command prompt, assuming class file “Hello World.java”?",
        "code": "",
        "options": [
          "Compile HelloWorld.java",
          "javac HelloWorld.java",
          "Cmp HelloWorld.java",
          "java HelloWorld"
        ],
        "correctAnswer": 1,
        "explanation": "Để biên dịch mã nguồn Java từ dòng lệnh, ta sử dụng trình biên dịch `javac` kèm tên tệp mã nguồn có phần mở rộng `.java` (ví dụ: `javac HelloWorld.java`). Khi biên dịch thành công, nó sẽ sinh ra tệp bytecode `HelloWorld.class`.",
        "tip": "MẸO PHÒNG THI: Biên dịch -> dùng lệnh 'javac' + tên file đuôi '.java'. Chạy chương trình -> dùng lệnh 'java' + tên class (không đuôi)!"
      },
      {
        "id": "q_15",
        "question": "Which environment variable is one way to tell applications, including the JDK tools, where to look for user classes ?",
        "code": "",
        "options": [
          "PATH",
          "USERPATH",
          "CLASSPATH",
          "NEWPATH"
        ],
        "correctAnswer": 2,
        "explanation": "Biến môi trường `CLASSPATH` trong Java được các công cụ JDK và JVM sử dụng để tìm kiếm các tệp `.class` hoặc các thư viện `.jar` do người dùng định nghĩa.",
        "tip": "MẸO PHÒNG THI: Đường dẫn tìm class -> Chọn ngay 'CLASSPATH'!"
      },
      {
        "id": "q_16",
        "question": "JDK contains _________ .",
        "code": "",
        "options": [
          "None of the above.",
          "Only Development Tools",
          "Only JRE.",
          "Both (JRE+ Development Tools)."
        ],
        "correctAnswer": 3,
        "explanation": "Bộ công cụ phát triển Java (JDK - Java Development Kit) bao gồm: JRE (môi trường thực thi Java, trong đó có JVM và thư viện chuẩn) CỘNG VỚI các công cụ phát triển (Development Tools như javac, jar, javadoc, jdb).",
        "tip": "MẸO PHÒNG THI: Công thức: JDK = JRE + Development Tools (javac, jar...). JRE = JVM + Core Libraries!"
      },
      {
        "id": "q_17",
        "question": "At what line will the Object created on line 10 be eligible for garbage collection?",
        "code": "public class Dummy {\n    class HappyGarbage01 {\n        public static void main(String args[]) {\n            HappyGarbage01 h = new HappyGarbage01();\n            h.methodA(); /* Line 6 */\n        } /* Line 7 */\n\n        Object methodA() /* Line 8 */ {\n            /* Line 9 */\n            Object obj1 = new Object(); /* Line 10 */\n            Object[] obj2 = new Object[1]; /* Line 11 */\n            obj2[0] = obj1;\n            obj1 = null;\n            return obj2[0];\n        }\n    }\n}",
        "options": [
          "After line 9",
          "After line 10",
          "After line 11",
          "Garbage collector never invoked in methodA()"
        ],
        "correctAnswer": 3,
        "explanation": "Đối tượng `obj1` được tạo tại dòng 10 và được gán vào mảng `obj2[0]`. Dù dòng 12 gán `obj1 = null`, tham chiếu tới đối tượng vẫn được giữ bởi phần tử `obj2[0]`. Phương thức `methodA()` sau đó trả về `obj2[0]`, do đó đối tượng vẫn được giữ tham chiếu bên ngoài và không bao giờ đủ điều kiện để bộ thu gom rác (GC) thu dọn trong phạm vi `methodA()`.",
        "tip": "MẸO PHÒNG THI: `obj2[0] = obj1` rồi `return obj2[0]` -> Đối tượng vẫn được trả về và giữ tham chiếu bên ngoài -> Chọn 'Garbage collector never invoked in methodA()'!"
      },
      {
        "id": "q_18",
        "question": "which method run before an object is Garbage collected?",
        "code": "",
        "options": [
          "final",
          "finalize",
          "finally",
          "None of above"
        ],
        "correctAnswer": 1,
        "explanation": "Phương thức `finalize()` thuộc lớp `java.lang.Object` được Garbage Collector tự động gọi một lần duy nhất ngay trước khi đối tượng bị dọn dẹp và giải phóng khỏi bộ nhớ Heap.",
        "tip": "MẸO PHÒNG THI: Phương thức chạy trước khi dọn rác -> Luôn là 'finalize'!"
      },
      {
        "id": "q_19",
        "question": "When is the Bar object, created on line 6, eligible for garbage collection?",
        "code": "public class Dummy {\n    class Bar {}\n\n    class Test {\n        Bar doBar() {\n            Bar b = new Bar(); /* Line 6 */\n            return b; /* Line 7 */\n        }\n\n        public static void main(String args[]) {\n            Test t = new Test(); /* Line 11 */\n            Bar newBar = t.doBar(); /* Line 12 */\n            System.out.println(\"newBar\");\n            newBar = new Bar(); /* Line 14 */\n            System.out.println(\"finishing\"); /* Line 15 */\n        }\n    }\n}",
        "options": [
          "after line 7, when doBar() completes",
          "after line 12",
          "after line 14",
          "after line 15, when main() completes"
        ],
        "correctAnswer": 2,
        "explanation": "Đối tượng `Bar` tạo tại dòng 6 được trả về và gán cho biến `newBar` tại dòng 12. Đến dòng 14, `newBar` được gán sang một đối tượng `new Bar()` hoàn toàn mới, làm mất đi tham chiếu duy nhất tới đối tượng ban đầu tạo ở dòng 6. Do đó, đối tượng tạo ở dòng 6 đủ điều kiện bị thu gom rác ngay sau dòng 14 ('after line 14').",
        "tip": "MẸO PHÒNG THI: Biến tham chiếu `newBar` bị gán lại đối tượng mới ở dòng 14 (`newBar = new Bar(); /* Line 14 */`) -> Đối tượng cũ bị bỏ rơi ngay sau dòng 14 -> Chọn 'after line 14'!"
      },
      {
        "id": "q_20",
        "question": "Which of the following data type come under floating data types?",
        "code": "",
        "options": [
          "Int",
          "Byte",
          "long",
          "double"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"double\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 1: Giới thiệu Java & Cú pháp cơ bản'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 1: Giới thiệu Java & Cú pháp cơ bản): Chú ý từ khóa trọng tâm 'double'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_21",
        "question": "____________ can be defined as the process where one object acquires the properties of another.",
        "code": "",
        "options": [
          "Inheritance",
          "Polymorphism",
          "Abstraction",
          "Encapsulation"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Inheritance\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Inheritance'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_22",
        "question": "_____________ type of class are declared and instantiated within the same statement.",
        "code": "",
        "options": [
          "Local",
          "Anonymous",
          "Member",
          "Nested top-level"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Anonymous\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Anonymous'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_23",
        "question": "____________ aren't allowed to be declared public, protected, private, or static.",
        "code": "",
        "options": [
          "Member",
          "Nested top-level",
          "Local",
          "Anonymous"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Local\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Local'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_24",
        "question": "_______ class is the only class that you can declare static.",
        "code": "",
        "options": [
          "Local",
          "Anonymous",
          "Nested top-level",
          "Member"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Member\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Member'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_25",
        "question": "________ class is a member classes with a static modifier.",
        "code": "",
        "options": [
          "Nested top-level",
          "Local",
          "Member",
          "None of the Above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Nested top-level\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Nested top-level'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_26",
        "question": "_____________ garbage collector in Java uses a parallel version of the young generation collector.",
        "code": "",
        "options": [
          "Throughput Garbage Collector",
          "Concurrent low pause Collector",
          "The Incremental pause collector",
          "None of the Above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Throughput Garbage Collector\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Throughput Garbage Collector'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_27",
        "question": "When an Object becomes Eligible for Garbage Collection?",
        "code": "",
        "options": [
          "If an object has only live references via WeakHashMap it will be eligible for garbage collection",
          "All references of that object explicitly set to null e.g. object = null",
          "All of the Above",
          "Object is created inside a block and reference goes out scope once control exit that"
        ],
        "correctAnswer": 2,
        "explanation": "Một đối tượng chỉ đủ điều kiện dọn rác (Garbage Collection) khi không còn bất kỳ biến tham chiếu còn sống nào trỏ tới nó. Ở đây, tại vị trí dòng được chỉ định, biến tham chiếu đã bị gán lại sang đối tượng khác hoặc ra khỏi phạm vi khối lệnh, khiến đối tượng cũ bị mồ côi trên Heap.",
        "tip": "MẸO PHÒNG THI: Lần theo tên biến tham chiếu: khi biến bị gán giá trị mới hoặc gán null -> Ngay sau dòng đó đối tượng ban đầu được phép dọn rác!"
      },
      {
        "id": "q_28",
        "question": "___________ Keyword can be used to refer current class instance variable.",
        "code": "",
        "options": [
          "Abstraction",
          "Final",
          "Static",
          "this"
        ],
        "correctAnswer": 3,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_29",
        "question": "_________ can be used to invoke current class constructor.",
        "code": "",
        "options": [
          "this",
          "Polymorphism",
          "Final",
          "Encapsulation"
        ],
        "correctAnswer": 0,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_30",
        "question": "__________ keyword can be passed as argument in the constructor call",
        "code": "",
        "options": [
          "Static",
          "this",
          "Final",
          "None of the Above"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_31",
        "question": "________ Keyword can be used to return current class instance.",
        "code": "",
        "options": [
          "Encapsulation",
          "Static",
          "this",
          "Polymorphism"
        ],
        "correctAnswer": 2,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_32",
        "question": "________ is the technique of making the fields in a class private and providing access to the fields via public methods.",
        "code": "",
        "options": [
          "Inheritance",
          "Plymorphism",
          "Interfaces",
          "Encapsulation"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Encapsulation\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Encapsulation'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_33",
        "question": "__________ keyword can be used to invoke current class method (implicitly).",
        "code": "",
        "options": [
          "this",
          "Final",
          "Static",
          "None of the Above"
        ],
        "correctAnswer": 0,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_34",
        "question": "______ is the ability of an object to take on many forms.",
        "code": "",
        "options": [
          "Packages",
          "Polymorphism",
          "Interface",
          "Abstraction"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Polymorphism\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Polymorphism'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_35",
        "question": "________ is used in Java in order to prevent naming conflicts, to control access, to make searching/locating and usage of classes, interfaces, enumerations and annotations easier, etc.",
        "code": "",
        "options": [
          "Polymorphism",
          "Checked Exceptions",
          "Package",
          "Abstraction"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Package\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Package'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_36",
        "question": "Which of the below code block represent correct?",
        "code": "",
        "options": [
          "class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n        int p,q,r;\n        public int addNumbers(int var1, int var2, int var3) {\n            return var1 + var2 + var3;\n        }\n        public void displayMessage() {\n            System.out.println(\"Display Message\");\n        }\n    }",
          "class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n    }\n    int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }",
          "class Test {\n    Test() int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }\n}",
          "class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n    }\n    int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }\n}"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n    }\n    int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }\n}\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n    }\n    int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }\n}'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_37",
        "question": "A runtime entity that has state and behaviour is known as _______.",
        "code": "",
        "options": [
          "Object",
          "Class",
          "Instance Variable",
          "Method"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Object\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Object'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_38",
        "question": "What are also known as Static Fields?",
        "code": "",
        "options": [
          "Class Methods",
          "Class Variables",
          "Interface",
          "Abstraction"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Class Variables\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Class Variables'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_39",
        "question": "_________ definition states that, only the method where the parameter appears can access these variables.",
        "code": "",
        "options": [
          "instance variables",
          "local variables",
          "parameter variables",
          "None of the Above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"parameter variables\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'parameter variables'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_40",
        "question": "________ are created when the object is constructed, and goes away when the object disappears.",
        "code": "",
        "options": [
          "local variables",
          "parameter variables",
          "Interface",
          "instance variables"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"instance variables\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'instance variables'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_41",
        "question": "Which of the following is/are feature of Interface?",
        "code": "",
        "options": [
          "All of the methods in an interface are abstract",
          "An interface does not contain any constructors",
          "Interface cannot be instantiated",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_42",
        "question": "Which of this keyword can be used to prevent Method overriding?",
        "code": "",
        "options": [
          "finally",
          "final",
          "abstract",
          "protected"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `final` trong Java: 1) Biến `final` trở thành hằng số; 2) Phương thức `final` ngăn cản lớp con ghi đè (cannot be overridden); 3) Lớp `final` ngăn cản kế thừa (cannot be extended, vd lớp `String`, `Math`).",
        "tip": "MẸO PHÒNG THI: Ngăn chặn Method Overriding -> Luôn chọn từ khóa 'final'!"
      },
      {
        "id": "q_43",
        "question": "If a class inheriting an abstract class does not define all of its function then it will be known as ___________.",
        "code": "",
        "options": [
          "A simple class",
          "Nested",
          "abstract",
          "final"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"abstract\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'abstract'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_44",
        "question": "What is the output of this program?",
        "code": "public class Dummy {\n    class A {\n        public int i;\n        private int j;\n    }\n\n    class B extends A {\n        void display() {\n            super.j = super.i + 1;\n            System.out.println(super.i + \" \" + super.j);\n        }\n    }\n\n    class inheritance {\n        public static void main(String args[]) {\n            B obj = new B();\n            obj.i = 1;\n            obj.j = 3;\n            obj.display();\n        }\n    }\n}",
        "options": [
          "Hello",
          "Compiler error",
          "Run time error",
          "Hi"
        ],
        "correctAnswer": 1,
        "explanation": "Thuộc tính `j` được khai báo là `private` trong lớp `A` (`private int j;`). Theo nguyên tắc đóng gói của Java, các thành viên `private` chỉ có thể được truy cập bên trong nội bộ lớp `A`, lớp con `B` (`super.j`) và các lớp bên ngoài như `inheritance` (`obj.j`) không thể truy cập trực tiếp, dẫn đến lỗi biên dịch (Compile-time error: *j has private access in A*).",
        "tip": "MẸO PHÒNG THI: Thấy biến lớp cha khai báo là `private`, mà lớp con hoặc hàm main gọi `.j` trực tiếp -> Chắc chắn 100% chọn 'Compiler error'!"
      },
      {
        "id": "q_45",
        "question": "Which of the following statement is incorrect?",
        "code": "",
        "options": [
          "public members of class can be accessed by any code in the program",
          "protected members of a class can be inherited by a sub class, and become private members of the sub class",
          "private members of class can only be accessed by other members of the class",
          "private members of class can be inherited by a sub class, and become protected members in sub class"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"private members of class can be inherited by a sub class, and become protected members in sub class\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'private members of class can be inherited by a sub class, and become protected members in sub class'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_46",
        "question": "Which of the following is supported by method overriding in java?",
        "code": "",
        "options": [
          "Abstraction",
          "encapsulation",
          "polymorphism",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"polymorphism\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'polymorphism'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_47",
        "question": "Which of the following is advantage of inheritance in java?",
        "code": "",
        "options": [
          "Data hiding",
          "Extensibility",
          "Reusability",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_48",
        "question": "Which keyword is used to invoke super class constructor explicitly in java?",
        "code": "",
        "options": [
          "this",
          "Super",
          "base",
          "extends"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `super` trong Java được dùng để tham chiếu trực tiếp đến lớp cha: `super()` gọi constructor của lớp cha (phải nằm ở dòng đầu tiên của constructor lớp con); `super.method()` hoặc `super.variable` truy cập phương thức/biến của lớp cha khi bị lớp con che khuất hoặc ghi đè.",
        "tip": "MẸO PHÒNG THI: Thấy 'super class' hoặc 'invoke super class constructor' -> Chọn ngay 'super' (hoặc 'Super')!"
      },
      {
        "id": "q_49",
        "question": "What will be output of following program?",
        "code": "public class Dummy {\n    interface A {\n        public void method1();\n    }\n\n    class One implements A {\n        public void method1() {\n            System.out.println(\"hello\");\n        }\n    }\n\n    class Two extends One {}\n\n    public class Test extends Two {\n        public static void main(String[] args) {\n            A a;\n            Two t = new Two();\n            a = t;\n            a.method1();\n        }\n    }\n}",
        "options": [
          "hello",
          "Compilation error",
          "Runtime error",
          "None of the above"
        ],
        "correctAnswer": 0,
        "explanation": "Lớp `One` cài đặt giao diện `A` và định nghĩa phương thức `method1()` in ra chữ \"hello\". Lớp `Two` kế thừa `One`. Khi khai báo biến tham chiếu `A a;` và gán `a = t;` (với `t` là thể hiện của `Two`), gọi `a.method1()` sẽ kích hoạt cơ chế đa hình runtime và gọi phương thức `method1()` của lớp `One`, in ra màn hình chuỗi \"hello\".",
        "tip": "MẸO PHÒNG THI: Đa hình giao diện (Interface Polymorphism): `One` implements `A` và in ra \"hello\", đối tượng `Two` kế thừa `One` -> Khi gọi qua tham chiếu `A` sẽ in ra 'hello'!"
      },
      {
        "id": "q_50",
        "question": "If there are data fields’ defined in an interface, then they are implicitly defined to be __________.",
        "code": "",
        "options": [
          "Public",
          "static",
          "public, static and final",
          "final"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"public, static and final\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'public, static and final'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_51",
        "question": "What is the most restrictive access modifier that will allow members of one class to have access to members of another class in the same package?",
        "code": "",
        "options": [
          "Public",
          "protected",
          "Default",
          "abstract"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Default\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Default'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_52",
        "question": "If a variable or method is defined as ______, it is accessible by other members within same class. It is not accessible to members of other class.",
        "code": "",
        "options": [
          "Protected",
          "Public",
          "Private",
          "Default"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Private\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Private'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_53",
        "question": "An object of a sub class can be referred by its super class is known as _________.",
        "code": "",
        "options": [
          "down-casting",
          "simple casting",
          "up-casting",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Từ khóa `super` trong Java được dùng để tham chiếu trực tiếp đến lớp cha: `super()` gọi constructor của lớp cha (phải nằm ở dòng đầu tiên của constructor lớp con); `super.method()` hoặc `super.variable` truy cập phương thức/biến của lớp cha khi bị lớp con che khuất hoặc ghi đè.",
        "tip": "MẸO PHÒNG THI: Thấy 'super class' hoặc 'invoke super class constructor' -> Chọn ngay 'super' (hoặc 'Super')!"
      },
      {
        "id": "q_54",
        "question": "Which of the following is not a Marker Interface?",
        "code": "",
        "options": [
          "Serializable",
          "Collection",
          "Cloneable",
          "EventListner"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Collection\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Collection'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_55",
        "question": "Which of the following is true about the usage of super keyword?",
        "code": "",
        "options": [
          "Super is used to invoke immediate parent class methods",
          "Super() is used to invoke immediate parent class constructor",
          "Super is used to refer to immediate parent class instance variable",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_56",
        "question": "Which of the following is cannot have a subclass in java?",
        "code": "",
        "options": [
          "None of the above",
          "Parent Class",
          "Abstract Class",
          "Final Class"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Final Class\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Final Class'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_57",
        "question": "Which type of inheritance is not supported by in java?",
        "code": "",
        "options": [
          "Multilevel",
          "Hierarchical",
          "single",
          "Multiple"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Multiple\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Multiple'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_58",
        "question": "Which of the following is a predefined package in java?",
        "code": "",
        "options": [
          "lang Package",
          "util package",
          "io package",
          "All of the above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"lang Package\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'lang Package'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_59",
        "question": "What is process of defining two or more methods within same class that have same name but different parameters declaration?",
        "code": "",
        "options": [
          "Method Overloading",
          "Method Overridding",
          "Method hiding",
          "Method Invoking"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Method Overloading\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Method Overloading'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_60",
        "question": "Which of these is correct way of inheriting class Vehicle by class Car?",
        "code": "",
        "options": [
          "class Vehicle + class Car {}",
          "class Vehicle extends Car {}",
          "class Vehicle extends class Car {}",
          "class Vehicle implements class Car {}"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"class Vehicle extends Car {}\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'class Vehicle extends Car {}'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_61",
        "question": "Which of the following are the types of comments in Java?",
        "code": "",
        "options": [
          "Documentation Comment",
          "Block Comment",
          "Single Line Comment",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_62",
        "question": "Which of the following option will not compile?",
        "code": "",
        "options": [
          "short s = 20;",
          "char c='a';",
          "byte b=128;",
          "double d=3.4;"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"byte b=128;\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'byte b=128;'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_63",
        "question": "In java,_______ can only test for equality, whereas _______can evaluate any type of the Boolean expression.",
        "code": "",
        "options": [
          "switch, if",
          "if, switch",
          "if, continue",
          "if, break"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"switch, if\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'switch, if'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_64",
        "question": "What is the output of following snippet?",
        "code": "public class Dummy {\n    class Bitwise {\n        public static void main(String[] args) {\n            int x = 11 & 9;\n            int y = x ^ 3;\n            System.out.println(y | 12);\n        }\n    }\n}",
        "options": [
          "None of above",
          "4",
          "10",
          "14"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"14\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm '14'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_65",
        "question": "Which is true about a method-local inner class?",
        "code": "",
        "options": [
          "It must be marked final",
          "It can be marked abstract",
          "It can be marked public",
          "It can be marked static"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"It can be marked abstract\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'It can be marked abstract'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_66",
        "question": "Which statement is true about a static nested class?",
        "code": "",
        "options": [
          "You must have a reference to an instance of the enclosing class in order to instantiate it.",
          "It's variables and methods must be static",
          "It must extend the enclosing class",
          "It does not have access to non static members of the enclosing class."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"It does not have access to non static members of the enclosing class.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'It does not have access to non static members of the enclosing class.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_67",
        "question": "Which part of the memory is involved in Garbage Collection?",
        "code": "",
        "options": [
          "Stack",
          "None of the Above",
          "Both 1 & 2",
          "Heap"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Heap\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'Heap'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_68",
        "question": "What are the different ways to make an object eligible for Garbage Collection when it is no longer needed?",
        "code": "",
        "options": [
          "Object is created inside a block and reference goes out scope once control exit that block",
          "Make the reference variable to refer to another object",
          "Set all available object references to null",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Một đối tượng chỉ đủ điều kiện dọn rác (Garbage Collection) khi không còn bất kỳ biến tham chiếu còn sống nào trỏ tới nó. Ở đây, tại vị trí dòng được chỉ định, biến tham chiếu đã bị gán lại sang đối tượng khác hoặc ra khỏi phạm vi khối lệnh, khiến đối tượng cũ bị mồ côi trên Heap.",
        "tip": "MẸO PHÒNG THI: Lần theo tên biến tham chiếu: khi biến bị gán giá trị mới hoặc gán null -> Ngay sau dòng đó đối tượng ban đầu được phép dọn rác!"
      },
      {
        "id": "q_69",
        "question": "Which of the statement(s) is/are correct regarding the garbage collector?",
        "code": "",
        "options": [
          "Garbage collector is responsible for de-allocating memory",
          "Garbage collector is responsible for ensuring that any referenced objects remain in memory",
          "Garbage collector is responsible for recovering memory used by objects that are no longer reachable from references in executing code",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_70",
        "question": "Which of the following is way to call garbage collector?",
        "code": "",
        "options": [
          "Runtime.getRuntime().runFinalizersOnExit(boolean value)",
          "delete();",
          "System.gc();",
          "finalize()"
        ],
        "correctAnswer": 2,
        "explanation": "Cơ chế thu gom rác trong Java: Việc gọi `System.gc()` chỉ là gửi lời yêu cầu/đề nghị đến JVM, không thể ép buộc GC chạy ngay lập tức. Nếu các biến vẫn còn được tham chiếu (như được lưu vào mảng hoặc return ra ngoài), đối tượng sẽ không bao giờ bị GC thu hồi. Đáp án: System.gc();.",
        "tip": "MẸO PHÒNG THI: Đối tượng còn được return hoặc còn nằm trong mảng sống -> GC không bao giờ dọn dẹp được!"
      },
      {
        "id": "q_71",
        "question": "Which of the following is called accessor method in java?",
        "code": "",
        "options": [
          "set",
          "get",
          "None of the Above",
          "gets"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"get\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'get'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_72",
        "question": "Which of the following statement is true about Java?",
        "code": "",
        "options": [
          "A package statement if present must be the first statement of the program",
          "If a Java program defines a package and import statement, then the import statement must come before the package statement",
          "If an import statement is present, it must appear before any class or interface definitions",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_73",
        "question": "Which of the following is called mutators method in java?",
        "code": "",
        "options": [
          "Set",
          "Setter",
          "Getter",
          "Get"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Set\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'Set'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_74",
        "question": "Which one of the following is base class of all classes?",
        "code": "",
        "options": [
          "Java.lang.System",
          "Java.lang.Process",
          "Java.lang.ClassLoader",
          "Java.lang.Object"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Java.lang.Object\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'Java.lang.Object'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_75",
        "question": "Which of the following package is imported by default?",
        "code": "",
        "options": [
          "Java.io.*;",
          "Java.awt.*;",
          "Java.lang.*;",
          "Java.net.*;"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Java.lang.*;\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'Java.lang.*;'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_76",
        "question": "A top level class may have only the following access modifier. Select the one correct answer.",
        "code": "",
        "options": [
          "private",
          "protected",
          "default",
          "public"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"public\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'public'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_77",
        "question": "Which declaration of the main method below would allow a class to be started as a standalone program?",
        "code": "",
        "options": [
          "public static int main(char args[])",
          "public static void main(String args[])",
          "public static void MAIN(String args[])",
          "public static void main(String args)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"public static void main(String args[])\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'public static void main(String args[])'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_78",
        "question": "Which of the following is a Java keyword?",
        "code": "",
        "options": [
          "extends",
          "transient",
          "synchronized",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_79",
        "question": "Using which keyword we can access value of the instance variables and class variables of that class inside the method of that class itself.",
        "code": "",
        "options": [
          "super",
          "instance of",
          "this",
          "Transient"
        ],
        "correctAnswer": 2,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_80",
        "question": "By using ................... you can force immediate termination of a loop, by passing the conditional expression and any remaining code in the body of the loop",
        "code": "",
        "options": [
          "continue",
          "terminate",
          "None of the Above",
          "break"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"break\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'break'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_81",
        "question": "Which of the following is concrete class in collection framework that directly implements Collection?",
        "code": "",
        "options": [
          "Set",
          "None of Above",
          "List",
          "Map"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"None of Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'None of Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_82",
        "question": "Which of the following package contain Observable Class?",
        "code": "",
        "options": [
          "java.net",
          "java.util",
          "java.awt",
          "None of above"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"java.util\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'java.util'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_83",
        "question": "Which of the following is true about Queue in java?",
        "code": "",
        "options": [
          "Both Options 1 and 3",
          "Queue is an interface",
          "Queue is class",
          "Collection is super interface of Queue"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Both Options 1 and 3\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'Both Options 1 and 3'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_84",
        "question": "Which of these is an incorrect form of using method max() to obtain maximum element?",
        "code": "",
        "options": [
          "max(Comparator comp)",
          "max(List c)",
          "max(Collection c)",
          "max(Collection c, Comparator comp)"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"max(Comparator comp)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'max(Comparator comp)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_85",
        "question": "Which of these methods can randomize all elements in a list?",
        "code": "",
        "options": [
          "rand()",
          "shuffle()",
          "max(List l)",
          "randomize()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"shuffle()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'shuffle()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_86",
        "question": "Which of these methods can convert an object into a List?",
        "code": "",
        "options": [
          "ConvertList()",
          "SetList()",
          "singletonList()",
          "CopyList()"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"singletonList()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'singletonList()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_87",
        "question": "Which of these is true about unmodifiableCollection () method?",
        "code": "",
        "options": [
          "unmodifiableCollection () method is available for all collection.",
          "UnmodifiableCollection () is defined in Collection class.",
          "unmodifiableCollection () returns a collection that cannot be modified.",
          "All of above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'All of above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_88",
        "question": "Which of these is static field defined in Collections?",
        "code": "",
        "options": [
          "EMPTY_MAP",
          "All of above",
          "EMPTY_LIST",
          "EMPTY_SET"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'All of above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_89",
        "question": "What is the output of this program?",
        "code": "import java.util.*;\npublic class Dummy {\n    public static void main(String args[]) {\n        LinkedList<Integer> list = new LinkedList<>();\n        list.add(2);\n        list.add(8);\n        list.add(5);\n        list.add(1);\n\n        Iterator<Integer> i = list.iterator();\n        Collections.reverse(list);\n\n        while (i.hasNext()) {\n            System.out.print(i.next() + \" \");\n        }\n    }\n}",
        "options": [
          "1 5 8 2",
          "2 1 8 5",
          "2",
          "2 8 5 1"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"1 5 8 2\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm '1 5 8 2'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_90",
        "question": "Which of the following is true about hasNext () method of Iterator?",
        "code": "",
        "options": [
          "Return next element.",
          "Returns false if there are more elements. Otherwise, returns true.",
          "elements. Otherwise, returns false.",
          "None of above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"elements. Otherwise, returns false.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'elements. Otherwise, returns false.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_91",
        "question": "Which of the following method is used to remove element form collection during iteration?",
        "code": "",
        "options": [
          "delete()",
          "removeAt()",
          "None of above",
          "remove()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"remove()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'remove()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_92",
        "question": "You need to store elements in a collection that guarantees that no duplicates are stored and all elements can be accessed in natural order. Which interface provides that capability?",
        "code": "",
        "options": [
          "java.util.Map",
          "java.util.Set",
          "java.util.List",
          "All of above"
        ],
        "correctAnswer": 1,
        "explanation": "Giao diện `Set` (như HashSet, TreeSet, LinkedHashSet) được thiết kế để chỉ chứa các phần tử DUY NHẤT (không cho phép trùng lặp).",
        "tip": "MẸO PHÒNG THI: 'No duplicates' hoặc 'unique elements' -> 100% chọn 'Set'!"
      },
      {
        "id": "q_93",
        "question": "Which of the following is true about Observer?",
        "code": "",
        "options": [
          "Observer interface present in java.util package.",
          "All of above",
          "Observer contain update() method",
          "Observer is interface."
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'All of above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_94",
        "question": "Which interface does java.util.Hashtable implement?",
        "code": "",
        "options": [
          "Java.util.Map",
          "Java.util.Collection",
          "Java.util.List",
          "Java.util.HashTable"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Java.util.Map\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'Java.util.Map'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_95",
        "question": "Which interface provides the capability to store objects using a key-value pair?",
        "code": "",
        "options": [
          "Java.util.Set",
          "Java.util.List",
          "None of above",
          "Java.util.Map"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Java.util.Map\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'Java.util.Map'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_96",
        "question": "Which of these packages contain all the collection classes?",
        "code": "",
        "options": [
          "java.net",
          "java.awt",
          "java.util",
          "java.lang"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"java.util\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'java.util'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_97",
        "question": "Which of these methods deletes all the elements from invoking collection?",
        "code": "",
        "options": [
          "clear()",
          "refresh()",
          "reset()",
          "delete()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"clear()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'clear()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_98",
        "question": "What is Collection in Java?",
        "code": "",
        "options": [
          "None of above",
          "A group of interfaces",
          "A group of objects",
          "A group of classes"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"A group of objects\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'A group of objects'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_99",
        "question": "What is the output of this program?",
        "code": "import java.util.*;\n\nclass stack {\n    public static void main(String args[]) {\n        Stack obj = new Stack();\n        obj.push(new Integer(3));\n        obj.push(new Integer(2));\n        obj.pop();\n        obj.push(new Integer(5));\n        System.out.println(obj);\n    }\n}",
        "options": [
          "[3, 5]",
          "[3, 2, 5]",
          "[3, 5, 2]",
          "[3, 2]"
        ],
        "correctAnswer": 0,
        "explanation": "Lớp `Stack` hoạt động theo nguyên lý LIFO (Last-In First-Out):\n1. `push(3)` -> Stack: [3]\n2. `push(2)` -> Stack: [3, 2]\n3. `pop()` -> Lấy phần tử trên đỉnh là 2 ra -> Stack còn: [3]\n4. `push(5)` -> Stack: [3, 5]\nKết quả in ra đối tượng Stack là `[3, 5]`.",
        "tip": "MẸO PHÒNG THI: Stack LIFO: Đẩy 3, đẩy 2, pop (bỏ 2), đẩy 5 -> Còn lại [3, 5]!"
      },
      {
        "id": "q_100",
        "question": "Which of the following is collection sort pairs in map?",
        "code": "",
        "options": [
          "TreeMap",
          "HashMap",
          "Collection",
          "List"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"TreeMap\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'TreeMap'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_101",
        "question": "____________ is the superclass of all errors and exceptions in the Java language.",
        "code": "",
        "options": [
          "RuntimeException",
          "Throwable",
          "Exception",
          "Error"
        ],
        "correctAnswer": 1,
        "explanation": "Lớp `java.lang.Throwable` là lớp cha cao nhất (superclass) của toàn bộ hệ thống ngoại lệ và lỗi trong Java, chia thành hai nhánh con chính là `Error` và `Exception`.",
        "tip": "MẸO PHÒNG THI: Superclass của mọi ngoại lệ và lỗi -> Chọn 'Throwable'!"
      },
      {
        "id": "q_102",
        "question": "What is wrong with the following code?",
        "code": "public class MyClass {\n    public static void main(String[] args) throws A {\n        try {\n            f();\n        } finally {\n            System.out.println(\"Done.\");\n        } catch (A e) {\n            throw e;\n        }\n    }\n    public static void f() throws B {\n        throw new B();\n    }\n}\nclass A extends Throwable {}\nclass B extends A {}",
        "options": [
          "The finally block must follow the catch block in the main() method.",
          "The main() method must declare that it throws B.",
          "A single try block cannot be followed by both a finally and a catch block.",
          "The catch block in the main() method must declare that it catches B rather than A."
        ],
        "correctAnswer": 0,
        "explanation": "Trong cú pháp Java, cấu trúc khối `try-catch-finally` bắt buộc khối `finally` phải luôn đứng ở cuối cùng sau tất cả các khối `catch`. Việc đặt `finally` trước `catch` (`try { ... } finally { ... } catch { ... }`) vi phạm ngữ pháp Java dẫn đến lỗi biên dịch.",
        "tip": "MẸO PHÒNG THI: Thứ tự bất biến trong Java là `try -> catch -> finally`. Thấy `finally` nằm trước `catch` -> Chọn ngay 'The finally block must follow the catch block'!"
      },
      {
        "id": "q_103",
        "question": "What will happen when you attempt to compile and run the following code?",
        "code": "public class MyIf {\n    boolean b;\n\n    public static void main(String argv[]) {\n        MyIf mi = new MyIf();\n    }\n\n    MyIf() {\n        if (b) {\n            System.out.println(\"The value of b was true\");\n        } else {\n            System.out.println(\"The value of b was false\");\n        }\n    }\n}",
        "options": [
          "Compile time error, cannot simultaneously create and assign value for boolean value.",
          "Compile time error variable b was not initialised.",
          "Compilation without error and run with output “The value of b was false”.",
          "Compile time error the parameter to the if operator must evaluate to a Boolean."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Compilation without error and run with output “The value of b was false”.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'Compilation without error and run with output “The value of b was false”.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_104",
        "question": "What will happen when you attempt to compile and run this code?",
        "code": "public class MyIf {\n    public static void main(String argv[]) {\n        MyIf mi = new MyIf();\n    }\n    MyIf() {\n        boolean b = false;\n        if (b = false) {\n            System.out.println(\"The value of b is \" + b);\n        }\n    }\n}",
        "options": [
          "Run time error, a boolean cannot be appended using the + operator.",
          "Compile time error, cannot simultaneously create and assign value for Boolean value.",
          "Compile time error the parameter to the if operator must evaluate to a Boolean.",
          "Compilation and run with no output"
        ],
        "correctAnswer": 3,
        "explanation": "Trong Java, cú pháp điều kiện là chữ thường `if (b = false)`. Phép gán `b = false` gán giá trị `false` cho biến `b` và trả về chính giá trị `false` (kiểu boolean hợp lệ nên biên dịch hoàn toàn thành công). Do điều kiện trong `if` là `false`, khối lệnh in ra màn hình bị bỏ qua. Kết quả: Chương trình biên dịch thành công và chạy nhưng không in ra bất kỳ output nào ('Compilation and run with no output').",
        "tip": "MẸO PHÒNG THI: Thấy `if (b = false)` với kiểu boolean -> Biên dịch hoàn toàn hợp lệ nhưng điều kiện là `false` nên KHÔNG in ra gì cả -> Chọn 'Compilation and run with no output'!"
      },
      {
        "id": "q_105",
        "question": "What, if anything, would cause the following code not to compile?",
        "code": "class A {\n    void f() throws ArithmeticException {\n        // ...\n    }\n}\n\npublic class MyClass extends A {\n    public static void main(String[] args) {\n        A obj = new MyClass();\n        try {\n            obj.f();\n        } catch (ArithmeticException e) {\n            return;\n        } catch (Exception e) {\n            System.out.println(e);\n            throw new RuntimeException(\"Something wrong here\");\n        }\n    }\n\n    // InterruptedException is a direct subclass of Exception.\n    void f() throws InterruptedException {\n        // ...\n    }\n}",
        "options": [
          "The main() method must declare that it throws RuntimeException.",
          "You cannot throw exceptions from a catch block.",
          "The compiler will complain that the catch(ArithmeticException) block shadowsthe catch(Exception) block.",
          "Nothing is wrong with the code, it will compile without errors."
        ],
        "correctAnswer": 0,
        "explanation": "Ngoại lệ Unchecked (không bắt buộc try-catch khi biên dịch) là tất cả các lớp kế thừa từ `RuntimeException` và `Error` (ví dụ: NullPointerException, ArrayIndexOutOfBoundsException).",
        "tip": "MẸO PHÒNG THI: Unchecked Exception = Kế thừa từ RuntimeException!"
      },
      {
        "id": "q_106",
        "question": "What will happen when you attempt to compile and run this code?",
        "code": "public class exceptions {\n    public static void main(String Args[]) {\n        int[] array = new int[3];\n        try {\n            for (int i = 0; i < 4; ++i) {\n                array[i] = i;\n            }\n            System.out.println(array);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"ArrayIndexOutOfBoundsException!!\");\n        }\n    }\n}",
        "options": [
          "The program will print 0 1 2 4 in that order.",
          "Compile time errors.",
          "The program will throw ArrayIndexOutOfBoundsException.",
          "The program will only print 0 1 2 in that order."
        ],
        "correctAnswer": 2,
        "explanation": "Mảng `array` có kích thước là 3 (các chỉ số hợp lệ là 0, 1, 2). Vòng lặp `for (int i = 0; i < 4; ++i)` khi chạy đến `i = 3` sẽ truy cập `array[3]`, vượt quá giới hạn mảng nên chương trình sẽ ném ra ngoại lệ `ArrayIndexOutOfBoundsException` tại runtime.",
        "tip": "MẸO PHÒNG THI: Mảng `new int[3]` mà lặp `i < 4` -> Chắc chắn văng ngoại lệ `ArrayIndexOutOfBoundsException`!"
      },
      {
        "id": "q_107",
        "question": "Which of the following is not Java Checked Exceptions?",
        "code": "",
        "options": [
          "NumberFormatException.",
          "ClassNotFoundException.",
          "IllegalAccessException.",
          "CloneNotSupportedException."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"NumberFormatException.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'NumberFormatException.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_108",
        "question": "The _________ blocks are skipped for all normal exits from the ____ block where no exceptions were raised, and control is transferred to the __________ block if one is specified.",
        "code": "",
        "options": [
          "catch,try,finally",
          "try, continue,throw",
          "try,catch,finally",
          "try,catch,final"
        ],
        "correctAnswer": 2,
        "explanation": "Khối `finally` luôn luôn được thực thi dù trong khối `try` có xảy ra ngoại lệ hay không, và kể cả khi trong khối `try` có lệnh `return`. Trường hợp duy nhất finally không chạy là khi hệ thống gọi `System.exit(0)` hoặc JVM bị tắt đột ngột.",
        "tip": "MẸO PHÒNG THI: Thấy 'always executed' -> Chọn 'finally'!"
      },
      {
        "id": "q_109",
        "question": "Which of the following methods is not used to query an exception?",
        "code": "",
        "options": [
          "void printStackTrace()",
          "String getMessage()",
          "String toString()",
          "fillInStackTrace()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"fillInStackTrace()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'fillInStackTrace()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_110",
        "question": "Which of the following is correct statement regarding the below code?\ntry {\n    // some code\n} finally {\n}",
        "code": "",
        "options": [
          "Illegal syntax for try-finally.",
          "It is a legal syntax.",
          "catch block is missing.",
          "Compilation will fail."
        ],
        "correctAnswer": 1,
        "explanation": "Khối `finally` luôn luôn được thực thi dù trong khối `try` có xảy ra ngoại lệ hay không, và kể cả khi trong khối `try` có lệnh `return`. Trường hợp duy nhất finally không chạy là khi hệ thống gọi `System.exit(0)` hoặc JVM bị tắt đột ngột.",
        "tip": "MẸO PHÒNG THI: Thấy 'always executed' -> Chọn 'finally'!"
      },
      {
        "id": "q_111",
        "question": "Which type of exception is created in following case?",
        "code": "class TestClass extends Exception { }",
        "options": [
          "Checked exception",
          "Unchecked exception",
          "None of the above",
          "Neither Checked nor Unchecked exception"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Checked exception\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'Checked exception'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_112",
        "question": "____________ class is the base of all the exception classes.",
        "code": "",
        "options": [
          "RuntimeException",
          "Error",
          "Exception",
          "Throwable"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Exception\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'Exception'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_113",
        "question": "Which type of exception is created in following case?",
        "code": "class TestClass extends NullPonterExcpetion { }",
        "options": [
          "Neither Checked nor Unchecked exception",
          "Checked exception",
          "Unchecked exception",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Ngoại lệ Unchecked (không bắt buộc try-catch khi biên dịch) là tất cả các lớp kế thừa từ `RuntimeException` và `Error` (ví dụ: NullPointerException, ArrayIndexOutOfBoundsException).",
        "tip": "MẸO PHÒNG THI: Unchecked Exception = Kế thừa từ RuntimeException!"
      },
      {
        "id": "q_114",
        "question": "Which of the following is Java Unchecked RuntimeException?:",
        "code": "",
        "options": [
          "IllegalAccessException",
          "ClassNotFoundException",
          "ArithmeticException",
          "CloneNotSupportedException"
        ],
        "correctAnswer": 2,
        "explanation": "Ngoại lệ Unchecked (không bắt buộc try-catch khi biên dịch) là tất cả các lớp kế thừa từ `RuntimeException` và `Error` (ví dụ: NullPointerException, ArrayIndexOutOfBoundsException).",
        "tip": "MẸO PHÒNG THI: Unchecked Exception = Kế thừa từ RuntimeException!"
      },
      {
        "id": "q_115",
        "question": "___________ Method is used to supply the user with information about the trace that the exception has gone through inside the application/code.",
        "code": "",
        "options": [
          "getMessage()",
          "toString()",
          "getClause()",
          "printStackTrace ()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"printStackTrace ()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'printStackTrace ()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_116",
        "question": "Which of the following is not the method of Throwable class?",
        "code": "",
        "options": [
          "void printStackTrace(PrintStream s)",
          "void printStackTrace(OutputStream s)",
          "void printStackTrace(PrintWriter s)",
          "void printStackTrace()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"void printStackTrace(OutputStream s)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'void printStackTrace(OutputStream s)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_117",
        "question": "________________exception is typically thrown by the JVM when an attempt is made to use the null value as a reference value to refer to an object.",
        "code": "",
        "options": [
          "ArrayIndexOutOfBoundsException",
          "NullPointerException",
          "ClassNotFoundException",
          "IllegalStateException"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"NullPointerException\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'NullPointerException'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_118",
        "question": "Which of the following is not true about Error Class?",
        "code": "",
        "options": [
          "Errors are abnormal conditions.",
          "Errors are explicitly caught.",
          "An Error is a subclass of Throwable that indicates serious problems that a reasonable application should not try to catch.",
          "Error and its subclasses are regarded as unchecked exceptions for the purposes of compile-time checking of exceptions."
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Errors are explicitly caught.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'Errors are explicitly caught.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_119",
        "question": "Which digits, and in what order, will be printed when the following program is run?",
        "code": "public class MyClass {\n    public static void main(String[] args) {\n        int k = 0;\n        try {\n            int i = 5 / k;\n        } catch (ArithmeticException e) {\n            System.out.println(\"1\");\n        } catch (RuntimeException e) {\n            System.out.println(\"2\");\n            return;\n        } catch (Exception e) {\n            System.out.println(\"3\");\n        } finally {\n            System.out.println(\"4\");\n        }\n        System.out.println(\"5\");\n    }\n}",
        "options": [
          "The program will only print 5.",
          "The program will only print 1, 4, and 5, in that order",
          "The program will only print 1 and 4, in that order.",
          "The program will only print 1, 2, and 4, in that order"
        ],
        "correctAnswer": 1,
        "explanation": "1. Phép chia `5 / 0` ném ra ngoại lệ `ArithmeticException` -> Khối `catch (ArithmeticException e)` bắt được và in ra '1'.\n2. Khối `finally` luôn luôn thực thi bất kể có ngoại lệ hay không -> in ra '4'.\n3. Vì ngoại lệ đã được xử lý xong và không có lệnh return trong khối catch đầu tiên, luồng chương trình tiếp tục chạy câu lệnh tiếp theo sau try-finally -> in ra '5'.\n-> Kết quả in ra theo thứ tự là 1, 4, và 5.",
        "tip": "MẸO PHÒNG THI: Catch bắt lỗi chia 0 (in 1) -> Finally luôn chạy (in 4) -> Tiếp tục chạy lệnh cuối (in 5) -> Đáp án: '1, 4, and 5'!"
      },
      {
        "id": "q_120",
        "question": "What will be the result of attempting to compile and run the following program?",
        "code": "public class MyClass {\n    public static void main(String[] args) {\n        RuntimeException re = null;\n        throw re;\n    }\n}",
        "options": [
          "The program will compile without error and will throw java.lang.NullPointerException when run.",
          "The program will fail to compile because it cannot throw re.",
          "The code will fail to compile because the main() method does not declare that it throws RuntimeException in its declaration.",
          "The program will compile without error and will throw java.lang.Runtime- Exception when run."
        ],
        "correctAnswer": 0,
        "explanation": "Trong Java, lệnh `throw re;` biên dịch thành công vì `re` có kiểu là `RuntimeException`. Tuy nhiên khi thực thi tại runtime, biến `re` có giá trị là `null`. Việc ném một đối tượng `null` bằng câu lệnh `throw` sẽ khiến JVM tự động ném ra ngoại lệ `java.lang.NullPointerException`.",
        "tip": "MẸO PHÒNG THI: Thấy `throw null` hoặc `throw re` với `re = null` -> Luôn luôn gây ra `java.lang.NullPointerException` khi chạy!"
      },
      {
        "id": "q_121",
        "question": "What is multithreaded programming?",
        "code": "",
        "options": [
          "It’s a process in which a single process is running at a time.",
          "It’s a process in which two or more different processes run simultaneously.",
          "It’s a process in which two or more parts of same process run simultaneously.",
          "It’s a process in which many different processes are able to access same information."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"It’s a process in which two or more parts of same process run simultaneously.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'It’s a process in which two or more parts of same process run simultaneously.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_122",
        "question": "Which of the following method is used to mark the current thread as daemon thread?",
        "code": "",
        "options": [
          "public boolean isDaemon()",
          "public void setDaemon(int status)",
          "public void setDaemon(boolean status)",
          "public void makeDaemon()"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"public void setDaemon(boolean status)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'public void setDaemon(boolean status)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_123",
        "question": "Which of the following is/are types of thread in java?",
        "code": "",
        "options": [
          "User Thread.",
          "None of the above.",
          "Daemon Thread.",
          "Both 1 and 2."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Both 1 and 2.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Both 1 and 2.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_124",
        "question": "Which of the following is method of “java.util.Timer” class schedules the specified task for execution at the specified time?",
        "code": "",
        "options": [
          "void scheduleAtFixedRate(TimerTask task, long delay, long period)",
          "int purge()",
          "void scheduleAtFixedRate(TimerTask task, Date firstTime, long period)",
          "void schedule(TimerTask task, Date time)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"void schedule(TimerTask task, Date time)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'void schedule(TimerTask task, Date time)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_125",
        "question": "Synchronized blocks in Java are marked with the ________ keyword.",
        "code": "",
        "options": [
          "Synchronized",
          "Synchronization",
          "Synchronize.",
          "Shared"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Synchronized\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Synchronized'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_126",
        "question": "Which of the following statement(s) is/are correct regarding Synchronized keyword?",
        "code": "",
        "options": [
          "Synchronized keyword can be used with Instance Methods.",
          "Synchronized keyword can be used with Static Methods.",
          "Synchronized keyword can be used with Code blocks inside Static Methods.",
          "All of the above."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_127",
        "question": "Which of the following method cannot cause a thread to go into a blocked state?",
        "code": "",
        "options": [
          "wait()",
          "yield()",
          "sleep()",
          "suspend()"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `synchronized` trong Java được dùng để đồng bộ hóa phương thức hoặc khối lệnh, ngăn chặn hiện tượng Race Condition bằng cách chỉ cho phép một luồng duy nhất chiếm giữ monitor lock tại một thời điểm.",
        "tip": "MẸO PHÒNG THI: Ngăn chặn xung đột dữ liệu đa luồng -> Dùng 'synchronized'!"
      },
      {
        "id": "q_128",
        "question": "Which of the following class or interface defines wait(), notify(),and notifyAll() methods?",
        "code": "",
        "options": [
          "Thread.",
          "Class",
          "Object.",
          "Runnable."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Object.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Object.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_129",
        "question": "The default priority of a method is _________.",
        "code": "",
        "options": [
          "5",
          "1",
          "0",
          "10"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"5\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm '5'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_130",
        "question": "____________ Method used to get the priority of a thread.",
        "code": "",
        "options": [
          "setPriority()",
          "prority()",
          "getPriority()",
          "threadPriority()"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"getPriority()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'getPriority()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_131",
        "question": "In Deadlock ______________________.",
        "code": "",
        "options": [
          "Two or more threads have circular dependency on an object.",
          "Two or more threads are waiting for a resource.",
          "Two or more threads are trying to access a same object.",
          "None of the Above."
        ],
        "correctAnswer": 0,
        "explanation": "Từ khóa `synchronized` trong Java được dùng để đồng bộ hóa phương thức hoặc khối lệnh, ngăn chặn hiện tượng Race Condition bằng cách chỉ cho phép một luồng duy nhất chiếm giữ monitor lock tại một thời điểm.",
        "tip": "MẸO PHÒNG THI: Ngăn chặn xung đột dữ liệu đa luồng -> Dùng 'synchronized'!"
      },
      {
        "id": "q_132",
        "question": "Which of the following way(s) is/are used to create a thread in Java?",
        "code": "",
        "options": [
          "Both of A and B.",
          "Extending the thread class.",
          "None of the above.",
          "Implementing Runnable interface."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Both of A and B.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Both of A and B.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_133",
        "question": "Which of the following Exception can be throw by “sleep()” method?",
        "code": "",
        "options": [
          "InterruptedException.",
          "NullPointerException.",
          "ThreadException.",
          "IOException"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"InterruptedException.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'InterruptedException.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_134",
        "question": "Which of the Package is used during the implementation of multithreading in Java?",
        "code": "",
        "options": [
          "Java.awt",
          "Java.applet",
          "Java.Lang",
          "Java.io"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Java.Lang\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Java.Lang'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_135",
        "question": "Which of the following is not a valid constructor for Thread class?",
        "code": "",
        "options": [
          "Thread(ThreadGroup group, String name)",
          "Thread()",
          "Thread(Runnable , ThreadGroup )",
          "Thread(ThreadGroup group, Runnable target)"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Thread(Runnable , ThreadGroup )\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Thread(Runnable , ThreadGroup )'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_136",
        "question": "Which of the following method is use to start the thread Execution?",
        "code": "",
        "options": [
          "resume();",
          "init();",
          "start();",
          "run();"
        ],
        "correctAnswer": 2,
        "explanation": "Để khởi chạy một luồng mới chạy độc lập song song trên CPU, BẮT BUỘC phải gọi phương thức `start()`. Phương thức này yêu cầu JVM cấp phát tài nguyên hệ điều hành và sau đó JVM sẽ tự động gọi phương thức `run()` của luồng.",
        "tip": "MẸO PHÒNG THI: Muốn kích hoạt luồng chạy đa luồng -> Gọi 'start()'. Gọi 'run()' chỉ là gọi hàm thông thường tuần tự!"
      },
      {
        "id": "q_137",
        "question": "Which of the following method must be defined by a class implementing the java.lang.Runnable interface?",
        "code": "",
        "options": [
          "public void run()",
          "void run()",
          "void run(int priority)",
          "public void start()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"public void run()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'public void run()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_138",
        "question": "Which of the following method returns a reference to the currently executing thread object?",
        "code": "",
        "options": [
          "void run()",
          "static Thread currentThread()",
          "void resume()",
          "void start()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"static Thread currentThread()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'static Thread currentThread()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_139",
        "question": "Which of the following method can be used to make the main thread to be executed last among all the threads?",
        "code": "",
        "options": [
          "stop()",
          "join()",
          "Interrupted()",
          "sleep()"
        ],
        "correctAnswer": 3,
        "explanation": "Khác biệt cốt lõi: `Thread.sleep()` tạm dừng luồng hiện tại nhưng KHÔNG giải phóng khóa (monitor lock); trong khi `Object.wait()` tạm dừng luồng và GIẢI PHÓNG khóa để các luồng khác có thể vào khối synchronized.",
        "tip": "MẸO PHÒNG THI: sleep() giữ khóa (thuộc Thread); wait() nhả khóa (thuộc Object)!"
      },
      {
        "id": "q_140",
        "question": "Which of the following statement(s) regarding ThreadGroup class is/are correct?",
        "code": "",
        "options": [
          "Thread groups provide a mechanism for collecting multiple threads into a single object of type.",
          "ThreadGroup(ThreadGroup parent, String name) constructor can be used to create a new Thread group object.",
          "All of the above.",
          "activeCount() method is used to find the number of active threads in this thread group and its subgroups."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_141",
        "question": "Which of the following package contains the classes and interfaces required for doing the Input and Output operations in JAVA?",
        "code": "",
        "options": [
          "java.io.",
          "java.lang",
          "java.awt.",
          "java.util."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"java.io.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'java.io.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_142",
        "question": "Which of the following method of “RandomAccessFile” Attempts to skip over n bytes of input discarding the skipped bytes?",
        "code": "",
        "options": [
          "setLength(long n)",
          "seek(long n)",
          "skipBytes(int n)",
          "write(byte[] n)"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"skipBytes(int n)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'skipBytes(int n)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_143",
        "question": "Which of the following class is used to read streams of characters?",
        "code": "",
        "options": [
          "InputReader",
          "CharacterReader",
          "StreamReader",
          "FileReader"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"FileReader\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'FileReader'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_144",
        "question": "The _________ class is a character stream whose source is a string.",
        "code": "",
        "options": [
          "Java.io.BufferedReader",
          "Java.io.FilterReader",
          "Java.io.StringReader",
          "Java.io.FileReader"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Java.io.StringReader\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'Java.io.StringReader'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_145",
        "question": "Consider the below syntax choose correct among the following options:\npublic class BufferedReader extends _________",
        "code": "",
        "options": [
          "StringReader",
          "Reader",
          "InputStreamReader",
          "Writer"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Reader\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'Reader'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_146",
        "question": "Which of the following class is not related to input and output stream in terms of functioning?",
        "code": "",
        "options": [
          "Reader",
          "Writer",
          "InputStream",
          "File"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"File\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'File'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_147",
        "question": "Which of the following constructor does not belongs to “PipedReader” class?",
        "code": "",
        "options": [
          "PipedReader(PipedWriter src, int pipeSize)",
          "PipedReader(int pipeSize, String name)",
          "PipedReader(PipedWriter src)",
          "PipedReader(int pipeSize)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"PipedReader(int pipeSize, String name)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'PipedReader(int pipeSize, String name)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_148",
        "question": "Which of the following of Reader class is used to read a single character?",
        "code": "",
        "options": [
          "int read()",
          "int readChar()",
          "int read(char[] cbuf)",
          "int getChar()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"int read()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'int read()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_149",
        "question": "Which of the following is not a Stream in JAVA I/O?",
        "code": "",
        "options": [
          "System.inout",
          "System.in",
          "System.err",
          "System.out"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"System.inout\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'System.inout'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_150",
        "question": "Which of the following Constructor does not belongs to “File” class?",
        "code": "",
        "options": [
          "File(String pathname)",
          "File(URI uri)",
          "File(String parent, String child)",
          "File(String parent, URI uri)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"File(String parent, URI uri)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'File(String parent, URI uri)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_151",
        "question": "Which of the following method tests whether the application can execute the file denoted by this abstract pathname?",
        "code": "",
        "options": [
          "boolean canRead()",
          "boolean canWrite()",
          "boolean canExecute()",
          "int compareTo(File pathname)"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"boolean canExecute()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'boolean canExecute()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_152",
        "question": "Which of the following stream contains the classes which can work on character stream?",
        "code": "",
        "options": [
          "Character Stream",
          "All of the above",
          "inputStream",
          "outputStream"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Character Stream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'Character Stream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_153",
        "question": "Which of the following method of a “File” class returns the name of the file or directory denoted by this abstract pathname?",
        "code": "",
        "options": [
          "String getPath()",
          "String getName()",
          "File getParentFile()",
          "String getParent()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"String getName()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'String getName()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_154",
        "question": "_____________ Class is not a sub class of “inputStream” Class.",
        "code": "",
        "options": [
          "FilterInputStream",
          "PrintStream",
          "FileInputStream",
          "ObjectInputStream"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"PrintStream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'PrintStream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_155",
        "question": "Which of the following method of “inputStream” class reads the next byte of data from the input stream?",
        "code": "",
        "options": [
          "read()",
          "mark(int readlimit)",
          "skip(long n)",
          "markSupported()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"read()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'read()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_156",
        "question": "Which of the following method of outputStream class is flushes the output stream and forces any buffered output bytes to be written out?",
        "code": "",
        "options": [
          "close()",
          "flush()",
          "write(byte[] b, int off, int len)",
          "write(byte[] b)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"flush()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'flush()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_157",
        "question": "Which of the following “inputStream” class obtains input bytes from a file in a local file system?",
        "code": "",
        "options": [
          "FileInputStream",
          "FilterInputStream",
          "ObjectInputStream",
          "FileOutputStream"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"FileInputStream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'FileInputStream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_158",
        "question": "Which of the following class provides the ability to buffer the input?",
        "code": "",
        "options": [
          "DataInputStream",
          "FileInputStream",
          "ObjectInputStream",
          "BufferedInputStream"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"BufferedInputStream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'BufferedInputStream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_159",
        "question": "Which of the following method does not belongs to “BufferedOutputStream” class?",
        "code": "",
        "options": [
          "write(byte[] b, int off, int len)",
          "void flush()",
          "void write(int b)",
          "void reset()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"void reset()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'void reset()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_160",
        "question": "Consider the below syntax choose correct among the following options:\npublic class BufferedOutputStream extends _____________",
        "code": "",
        "options": [
          "DataOutputStream",
          "ByteArrayOutputStream",
          "FilterInputStream",
          "FilterOutputStream"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"FilterOutputStream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'FilterOutputStream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_161",
        "question": "In JAVA,which of this class is super class of all other classes?",
        "code": "",
        "options": [
          "Process",
          "Object",
          "Math",
          "System"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Object\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Object'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_162",
        "question": "Which of the following are valid terms in java?",
        "code": "",
        "options": [
          "finally",
          "final",
          "All of Above",
          "finalize"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"All of Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'All of Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_163",
        "question": "Which of these is a process of writing the state of an object to a byte stream?",
        "code": "",
        "options": [
          "All of the mentioned",
          "Serialization",
          "File Filtering",
          "DeSerialization"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Serialization\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Serialization'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_164",
        "question": "Which of these interfaces extend DataOutput interface?",
        "code": "",
        "options": [
          "ObjectInput",
          "Externalization",
          "ObjectOutput",
          "Serializable"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"ObjectOutput\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'ObjectOutput'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_165",
        "question": "Which of these is a method of ObjectOutput interface used to finalize the output state so that any buffers are cleared?",
        "code": "",
        "options": [
          "fflush()",
          "flush()",
          "clear()",
          "close()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"flush()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'flush()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_166",
        "question": "Which of the following gives the difference between StringBuilder and StringBuffer?",
        "code": "",
        "options": [
          "None Of above",
          "Both are Same, There is no difference.",
          "StringBuffer is synchronized and StringBuilder is not synchronized.",
          "StringBuffer is mutable and StringBuilder is not."
        ],
        "correctAnswer": 2,
        "explanation": "Khác biệt cốt lõi giữa StringBuffer và StringBuilder: `StringBuffer` là an toàn đa luồng (thread-safe) vì các phương thức đều được đánh dấu `synchronized`, dẫn đến tốc độ chậm hơn; `StringBuilder` KHÔNG có `synchronized` nên không thread-safe nhưng có tốc độ xử lý chuỗi nhanh hơn trong môi trường đơn luồng.",
        "tip": "MẸO PHÒNG THI: StringBuffer = Synchronized (Thread-safe); StringBuilder = Not synchronized (Nhanh hơn)!"
      },
      {
        "id": "q_167",
        "question": "Which of these is a process of extracting/removing the state of an object from a stream?",
        "code": "",
        "options": [
          "Deserialization",
          "None of above",
          "Serialization",
          "Externalization"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Deserialization\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Deserialization'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_168",
        "question": "Which of this process occur automatically by java run time system?",
        "code": "",
        "options": [
          "Memory allocation",
          "Serialization",
          "Deserialization",
          "All of the mentioned"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the mentioned\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'All of the mentioned'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_169",
        "question": "Which of following is correct package for Serializable interface in java?",
        "code": "",
        "options": [
          "Java.io",
          "Java.util",
          "Java.dotnet",
          "Java.lang"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Java.io\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Java.io'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_170",
        "question": "Which Java keyword is used to marks a member variable not to be serialized?",
        "code": "",
        "options": [
          "static",
          "transient",
          "final",
          "None of above"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `transient` trong Java được dùng để đánh dấu một biến thành viên (member variable) KHÔNG bị tuần tự hóa (serialization). Khi đối tượng được chuyển đổi thành luồng byte bằng `ObjectOutputStream` để ghi vào file hoặc truyền qua mạng, các trường `transient` sẽ bị bỏ qua và không được lưu lại; khi đọc lại (`ObjectInputStream`), biến sẽ nhận giá trị mặc định của kiểu dữ liệu (vd: `null`, `0`, `false`).",
        "tip": "MẸO PHÒNG THI: Thấy cụm từ 'not to be serialized' hoặc 'prevent serialization' -> Chọn ngay 'transient'! (Mẹo nhớ: 'transient' = tạm thời, chóng qua -> không lưu vĩnh viễn vào file)."
      },
      {
        "id": "q_171",
        "question": "Which of the following is serialization exception?",
        "code": "",
        "options": [
          "All of above",
          "NotSerializableException",
          "IOException",
          "InvalidClassException"
        ],
        "correctAnswer": 0,
        "explanation": "Các ngoại lệ liên quan đến Serialization trong Java đều kế thừa từ `ObjectStreamException` thuộc `java.io`, bao gồm: `NotSerializableException`, `InvalidClassException`, `WriteAbortedException`... Do đó đáp án là All of above.",
        "tip": "MẸO PHÒNG THI: Các câu hỏi trắc nghiệm liệt kê các Serialization Exceptions thường đáp án đúng là 'All of above'!"
      },
      {
        "id": "q_172",
        "question": "Which of this method of Object class can generate duplicate copy of the object on which it is called?",
        "code": "",
        "options": [
          "copy()",
          "clone()",
          "dublicate()",
          "dito()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"clone()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'clone()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_173",
        "question": "Which of the following is deserialization exception?",
        "code": "",
        "options": [
          "All of above.",
          "OptionalDataException",
          "InvalidClassException",
          "StreamCorruptedException"
        ],
        "correctAnswer": 0,
        "explanation": "Các ngoại lệ liên quan đến Serialization trong Java đều kế thừa từ `ObjectStreamException` thuộc `java.io`, bao gồm: `NotSerializableException`, `InvalidClassException`, `WriteAbortedException`... Do đó đáp án là All of above..",
        "tip": "MẸO PHÒNG THI: Các câu hỏi trắc nghiệm liệt kê các Serialization Exceptions thường đáp án đúng là 'All of above'!"
      },
      {
        "id": "q_174",
        "question": "Which of the following is true about immutable objects?",
        "code": "",
        "options": [
          "Instead of modify, it creates a new copy and keeps the original same",
          "An Object can be modified.",
          "An object that cannot be modified.",
          "Both 1 and 2."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Both 1 and 2.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Both 1 and 2.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_175",
        "question": "Which of the following wrapper classes are immutable?",
        "code": "",
        "options": [
          "Long",
          "Integer",
          "All of above.",
          "Character"
        ],
        "correctAnswer": 2,
        "explanation": "Trong Java, tất cả các lớp bao bọc nguyên thủy (Wrapper classes) như `Integer`, `Double`, `Float`, `Long`, `Boolean`, `Character`, `Byte`, `Short` và cả `String` đều là các đối tượng BẤT BIẾN (Immutable).",
        "tip": "MẸO PHÒNG THI: Tất cả các Wrapper class trong Java (Integer, Float, Double...) đều là IMMUTABLE!"
      },
      {
        "id": "q_176",
        "question": "Which of this method of String class is used to obtain character at specified index?",
        "code": "",
        "options": [
          "charAt()",
          "charat()",
          "Charat()",
          "char()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"charAt()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'charAt()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_177",
        "question": "Which of this method of String class can be used to test two strings for equality?",
        "code": "",
        "options": [
          "equal()",
          "isequals()",
          "isequal()",
          "equals()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"equals()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'equals()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_178",
        "question": "Which of the following statements are incorrect?",
        "code": "",
        "options": [
          "String is a class.",
          "Java defines a peer class of String, called StringBuffer, which allows string to be altered.",
          "Strings in java are mutable.",
          "Every string is an object of class String."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Strings in java are mutable.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Strings in java are mutable.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_179",
        "question": "What is the output of this program?",
        "code": "class string_class {\n    public static void main(String args[]) {\n        String obj = \"I LIKE JAVA\";\n        System.out.println(obj.length());\n    }\n}",
        "options": [
          "10",
          "9",
          "12",
          "11"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"11\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm '11'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_180",
        "question": "What is the output of this program?",
        "code": "class string_class {\n    public static void main(String args[]) {\n        String obj = \"hello\";\n        String obj1 = \"world\";\n        String obj2 = \"hello\";\n        System.out.println(obj.equals(obj1) + \" \" + obj.equals(obj2));\n    }\n}",
        "options": [
          "false true",
          "true false",
          "true true",
          "false false"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"false true\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'false true'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_181",
        "question": "What is JDBC?",
        "code": "",
        "options": [
          "Java Compiler",
          "Java API",
          "Java Interpreter",
          "None of the Above"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Java API\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Java API'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_182",
        "question": "Which of the following is the Statement Interface method?",
        "code": "",
        "options": [
          "execute()",
          "All of the Above",
          "executeQuery()",
          "executeUpdate()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_183",
        "question": "Which method is used to perform DML statements in JDBC?",
        "code": "",
        "options": [
          "execute()",
          "executeQuery()",
          "executeUpdate()",
          "None of the Above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"executeUpdate()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'executeUpdate()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_184",
        "question": "Which of the following is the type of the ResultSet?",
        "code": "",
        "options": [
          "All of the Above.",
          "ResultSet.TYPE_FORWARD_ONLY.",
          "ResultSet.TYPE_SCROLL_INSENSITIVE.",
          "ResultSet.TYPE_SCROLL_SENSITIVE."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the Above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_185",
        "question": "Which of the following method is in the category of ResultSet Interface?",
        "code": "",
        "options": [
          "Navigational Methods.",
          "All of the Above",
          "Update Methods",
          "Get Methods"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_186",
        "question": "What happens if you call the method close() on a ResultSet object?",
        "code": "",
        "options": [
          "The method close() does not exist for a ResultSet. Only Connections can be closed.",
          "None of the Above.",
          "You will get a SQLException, because only Statement objects can close ResultSet.",
          "The ResultSetObject and JDBC resources are released."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"The ResultSetObject and JDBC resources are released.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'The ResultSetObject and JDBC resources are released.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_187",
        "question": "Which method is used to move the ResultSet cursor to the next Row?",
        "code": "",
        "options": [
          "afterLast()",
          "next()",
          "beforeFirst()",
          "previous()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"next()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'next()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_188",
        "question": "Which type of Statement can execute parameterized queries?",
        "code": "",
        "options": [
          "PreparedStatement.",
          "None of the Above",
          "ParameterizedStatement",
          "Statement."
        ],
        "correctAnswer": 0,
        "explanation": "Giao diện `PreparedStatement` dùng cho các câu lệnh SQL có tham số đánh dấu `?`. Câu lệnh được cơ sở dữ liệu tiền biên dịch (precompiled), giúp tăng tốc độ thực thi khi gọi nhiều lần và chống tấn công SQL Injection.",
        "tip": "MẸO PHÒNG THI: SQL có tham số '?' hoặc tiền biên dịch (precompiled) -> Luôn chọn 'PreparedStatement'!"
      },
      {
        "id": "q_189",
        "question": "JDBC facilitates to store the java objects by using which of the following methods of PreparedStatement?",
        "code": "",
        "options": [
          "setClob(int parameterIndex, Clob x).",
          "All of the Above",
          "setObject(int parameterIndex,Object x)",
          "setBlob(int parameterIndex,Blob x)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_190",
        "question": "The Class java.sql.TimeStamp has its superclass as_______",
        "code": "",
        "options": [
          "java.util.Date;",
          "java.sql.Time;",
          "java.sql.Date;",
          "None of the Above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"java.util.Date;\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'java.util.Date;'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_191",
        "question": "Which of the following method is used to create a CallableStatement object?",
        "code": "",
        "options": [
          "createStatement()",
          "prepareStatement()",
          "None of the Above",
          "prepareCall()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"prepareCall()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'prepareCall()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_192",
        "question": "Which packages contain the JDBC classes?",
        "code": "",
        "options": [
          "java.rmi.",
          "java.sql.",
          "java.net",
          "java.awt"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"java.sql.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'java.sql.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_193",
        "question": "Which of the following allows dirty read in JDBC Connection?",
        "code": "",
        "options": [
          "TRANSACTION_READ_UNCOMMITTED",
          "TRANSACTION_SERIALIZABLE",
          "TRANSACTION_READ_COMMITTED",
          "TRANSACTION_REPEATABLE_READ"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"TRANSACTION_READ_UNCOMMITTED\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'TRANSACTION_READ_UNCOMMITTED'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_194",
        "question": "How many types of JDBC drivers are present?",
        "code": "",
        "options": [
          "Three",
          "One",
          "Four",
          "Two"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Four\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Four'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_195",
        "question": "Which type of driver provides JDBC access via one or more ODBC drivers?",
        "code": "",
        "options": [
          "Type 1 driver",
          "Type 4 driver",
          "Type 2 driver",
          "Type 3 driver"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Type 1 driver\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Type 1 driver'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_196",
        "question": "Which type of driver converts JDBC calls into the network protocol used by the database management system directly?",
        "code": "",
        "options": [
          "Type 2 driver",
          "Type 4 driver",
          "Type 1 driver",
          "Type 3 driver"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Type 4 driver\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Type 4 driver'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_197",
        "question": "What is the disadvantage of Type-4 Native-Protocol Driver?",
        "code": "",
        "options": [
          "The driver converts JDBC calls into vendor-specific database protocol",
          "No Software is required at both client & server side.",
          "At client side, a separate driver is needed for each database",
          "Type-4 driver is entirely written in Java"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"At client side, a separate driver is needed for each database\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'At client side, a separate driver is needed for each database'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_198",
        "question": "Which of the following methods is needed for loading a database driver in JDBC?",
        "code": "",
        "options": [
          "Class.forName()",
          "DriverManager.getConnection()",
          "Both 1 & 2",
          "DriverManager.registerDriver() Method"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Both 1 & 2\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Both 1 & 2'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_199",
        "question": "Which method is used to create a connection with database?",
        "code": "",
        "options": [
          "getConnection()",
          "getDriver()",
          "deregisterDriver()",
          "registerDriver()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"getConnection()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'getConnection()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_200",
        "question": "Which one of the following are the different types of statements in JDBC API?",
        "code": "",
        "options": [
          "Prepare Statement",
          "Callable Statement",
          "Statement",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_201",
        "question": "What is the full form of AWT?",
        "code": "",
        "options": [
          "Abstract Window Tool",
          "Automated Window Tool",
          "Automated Window Toolkit",
          "Abstract Window Toolkit"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Abstract Window Toolkit\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Abstract Window Toolkit'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_202",
        "question": "_________ is the default layout manager used for all Panels?",
        "code": "",
        "options": [
          "FlowLayout",
          "GridLayout",
          "CardLayout",
          "BorderLayout"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"FlowLayout\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'FlowLayout'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_203",
        "question": "At most how many components can be added if we are using a border layout in our applet?",
        "code": "",
        "options": [
          "Two components",
          "Four components",
          "Five components",
          "Three components"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Five components\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Five components'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_204",
        "question": "___________ is the most sophisticated, flexible layout manager in which we can have cell rows of different heights and columns of different widths?",
        "code": "",
        "options": [
          "BorderLayout",
          "GridBagLayout",
          "FlowLayout",
          "GridLayout"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"GridBagLayout\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'GridBagLayout'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_205",
        "question": "To associate an action with a component, we must attach a/an _______ to it?",
        "code": "",
        "options": [
          "listener",
          "container",
          "event",
          "button"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"listener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'listener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_206",
        "question": "Which of the following interface should we implement in order to attach a listener with a component?",
        "code": "",
        "options": [
          "AWTEventMulticaster",
          "Action",
          "EventListener",
          "ActionListener"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"ActionListener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'ActionListener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_207",
        "question": "Which method we must override while implementing ActionListener class to attach a listener to a component?",
        "code": "",
        "options": [
          "addActionListener",
          "actionEvent",
          "actionPerformed",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"actionPerformed\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'actionPerformed'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_208",
        "question": "_________ Classes are very useful when you want to process only few of the events that are handled by a particular event listener interface?",
        "code": "",
        "options": [
          "EventListener",
          "Adapter",
          "ActionListener",
          "Action"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Adapter\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Adapter'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_209",
        "question": "Which of the following statement is not true regarding difference between AWT and SWING?",
        "code": "",
        "options": [
          "AWT components are heavyweight components while Swing components are lightweight.",
          "AWT components are lightweight components while Swing components are heavyweight.",
          "Swing and AWT are incompatible you can use either, but you can’t mix them.",
          "AWT components require java.awt package while Swing components require javax.swing package."
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"AWT components are lightweight components while Swing components are heavyweight.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'AWT components are lightweight components while Swing components are heavyweight.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_210",
        "question": "_______ listener interface is used for receiving keyboard events (keystrokes)?",
        "code": "",
        "options": [
          "ActionListener",
          "KeyListener",
          "EventListener",
          "TextListener"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"KeyListener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'KeyListener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_211",
        "question": "Which of the following Exception class is used when an Absract Window Toolkit exception has occurred?",
        "code": "",
        "options": [
          "HeadlessException",
          "FontFormat Exception",
          "AWTException",
          "None of the above."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"AWTException\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'AWTException'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_212",
        "question": "Choose the correct order from the following to build the GUI using AWT?a) Make a frame or an applet to display things.b) Create your components.c) Attach listener to your components.d) Add your components.e) Arrange or layout your components.",
        "code": "",
        "options": [
          "a, b, e, d, c",
          "a, b, e, c, d",
          "a, b, d, e, c",
          "a, b, c, d, e"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"a, b, d, e, c\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'a, b, d, e, c'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_213",
        "question": "________ container class provides space in which an application can attach any other component like button,ComboBox, etc?",
        "code": "",
        "options": [
          "ScrollPane",
          "None of the above",
          "Panel",
          "Window"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Panel\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Panel'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_214",
        "question": "Which of the following is not a subclass of Component class?",
        "code": "",
        "options": [
          "Checkbox",
          "Label",
          "Button",
          "Panel"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Panel\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Panel'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_215",
        "question": "Which of the following is not a subclass of Container class?",
        "code": "",
        "options": [
          "Window",
          "Label",
          "Panel",
          "ScrollPane"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Label\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Label'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_216",
        "question": "The Applet class is in ........ package?",
        "code": "",
        "options": [
          "java.applet",
          "java.awt",
          "java.util",
          "java.io"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"java.applet\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'java.applet'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_217",
        "question": "To run an applet, which of the following command is used?",
        "code": "",
        "options": [
          "javac",
          "applet",
          "java",
          "appletviewer"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"appletviewer\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'appletviewer'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_218",
        "question": "Which of the following method is called first by an applet?",
        "code": "",
        "options": [
          "start()",
          "destroy()",
          "paint()",
          "init()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"init()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'init()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_219",
        "question": "To display text on the applet __________ method is used?",
        "code": "",
        "options": [
          "drawString()",
          "drawLine",
          "showString()",
          "println()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"drawString()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'drawString()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_220",
        "question": "Which of the following is/are type of layout manager used in every containers?",
        "code": "",
        "options": [
          "CardLayout",
          "BorderLayout",
          "GridLayout",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_221",
        "question": "Swing is a part of _________.",
        "code": "",
        "options": [
          "JAXP",
          "JFC",
          "JDBC",
          "JMX"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"JFC\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JFC'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_222",
        "question": "Out of the following which is not a top level container in swing?",
        "code": "",
        "options": [
          "Applet",
          "InternalFrame",
          "Dialog",
          "Frame"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"InternalFrame\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'InternalFrame'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_223",
        "question": "Which of the following class is not inherited from JComponent class?",
        "code": "",
        "options": [
          "JButton",
          "JFrame",
          "JLable",
          "JTable"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"JFrame\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JFrame'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_224",
        "question": "Which event listener you will use to listen for changes in the component’s size, position or visibility?",
        "code": "",
        "options": [
          "Focus Listener",
          "Component Listener",
          "Key Listener",
          "Mouse Listener"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Component Listener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'Component Listener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_225",
        "question": "Which class will be used to display hierarchical data?",
        "code": "",
        "options": [
          "JLabel",
          "JTree",
          "JDialog",
          "JComponent"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"JTree\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JTree'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_226",
        "question": "Which pane acts as a sheet of glass over all the other components?",
        "code": "",
        "options": [
          "GlassPane",
          "ContentPane",
          "EditorPane",
          "LayeredPane"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"GlassPane\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'GlassPane'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_227",
        "question": "Which method do you use to add a menu bar to a top-level container such as a JFrame?",
        "code": "",
        "options": [
          "setSelected",
          "setComponet",
          "setLayout",
          "setJMenuBar"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"setJMenuBar\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'setJMenuBar'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_228",
        "question": "Which is the default layout manager for a panel?",
        "code": "",
        "options": [
          "GridLayout",
          "BoxLayout",
          "BorderLayout",
          "FlowLayout"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"FlowLayout\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'FlowLayout'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_229",
        "question": "To set a tool tip for any JComponent which is the correct syntax in Java Swing?",
        "code": "",
        "options": [
          "b1.ToolTipText(\"Click this button to disable the middle button.\");",
          "b1.setToolTipText(\"Click this button to disable the middle button.\");",
          "b1.setToolText(\"Click this button to disable the middle button.\");",
          "b1.setToolTip(\"Click this button to disable the middle button.\");"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"b1.setToolTipText(\"Click this button to disable the middle button.\");\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'b1.setToolTipText(\"Click this button to disable the middle button.\");'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_230",
        "question": "Which Swing components use ListSelectionModel to manage selection state?",
        "code": "",
        "options": [
          "Both 1 and 2",
          "JTable",
          "JList",
          "JMenu"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Both 1 and 2\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'Both 1 and 2'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_231",
        "question": "Which event you will use to assist in the implementation of undo and redo commands?",
        "code": "",
        "options": [
          "Undoable edit events",
          "Action event",
          "Key event",
          "Mouse event"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Undoable edit events\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'Undoable edit events'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_232",
        "question": "In JAVA , what is lightweight component?",
        "code": "",
        "options": [
          "A component that lets the user pick a color.",
          "A component that displays an icon, but that doesn't react to user clicks.",
          "A component that is associated with its own native screen resource.",
          "A component has no native screen resource of its own."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"A component has no native screen resource of its own.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'A component has no native screen resource of its own.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_233",
        "question": "Which listener interface will be used to detect typing events at the keyboard?",
        "code": "",
        "options": [
          "Key Listener",
          "Change Listener",
          "Property Change Listener",
          "Component Listener"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Key Listener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'Key Listener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_234",
        "question": "Which method is used to specify a container’s layout?",
        "code": "",
        "options": [
          "setLayoutContainer()",
          "setLayout()",
          "setComponentLayout()",
          "setContainerLayout()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"setLayout()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'setLayout()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_235",
        "question": "The following code will set the 'button' at which position in BorderLayout?",
        "code": "// Container pane = aFrame.getContentPane();\nJButton button = new JButton(\"Button 1 (LINE_START)\");\npane.add(button, BorderLayout.LINE_START);",
        "options": [
          "North",
          "West",
          "East",
          "South"
        ],
        "correctAnswer": 1,
        "explanation": "Trong bố cục `BorderLayout` của Java Swing/AWT, `BorderLayout.LINE_START` tương ứng với vị trí `BorderLayout.WEST` (bên trái theo hướng đọc từ trái sang phải mặc định).",
        "tip": "MẸO PHÒNG THI: Trong BorderLayout: `LINE_START` = `WEST` (Tây/Trái), `LINE_END` = `EAST` (Đông/Phải), `PAGE_START` = `NORTH`, `PAGE_END` = `SOUTH`!"
      },
      {
        "id": "q_236",
        "question": "Text components use an EditorKit to tie the various pieces of the text component together. The Swing text package provides which of the following editor kits?",
        "code": "",
        "options": [
          "StyledEditorKit",
          "All of the above",
          "DefaultEditorKit",
          "HTMLEditorKit"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_237",
        "question": "The immediate superclass of JCheckBox class is _________________ .",
        "code": "",
        "options": [
          "JToggleButton",
          "JButton",
          "AbstractButton",
          "JComponent"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"JToggleButton\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JToggleButton'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_238",
        "question": "To choose one of the options from a drop-down list which of the following components can be used in Java Swing?",
        "code": "",
        "options": [
          "JList",
          "JCheckBoxMenuItem",
          "JComboBox",
          "JMenu"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"JComboBox\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JComboBox'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_239",
        "question": "Which of the following pane provide a scrollable view of the component?",
        "code": "",
        "options": [
          "JSplitPane",
          "JTabbedPane",
          "JRootPane",
          "JScrollPane"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"JScrollPane\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JScrollPane'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_240",
        "question": "Which is the most suitable class, to create a container (in java swing) to display an error message or warning to a user?",
        "code": "",
        "options": [
          "JApplet",
          "JFrame",
          "JDialog",
          "JInternalFrame"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"JDialog\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JDialog'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_241",
        "question": "Java Socket Consist of _____________?",
        "code": "",
        "options": [
          "None of the above",
          "IP address",
          "port number",
          "Both IP address and port number"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Both IP address and port number\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'Both IP address and port number'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_242",
        "question": "Which of following methods are defines in URLConnection class?",
        "code": "",
        "options": [
          "String getContentType( )",
          "All of the above",
          "long getDate( )",
          "int getContentLength( )"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_243",
        "question": "Which method is Waits for an incoming client and blocks until either a client connects to the server on specific port or the socket times out?",
        "code": "",
        "options": [
          "public Socket accept() throws IOException",
          "public void setSoTimeout(int timeout)",
          "public void bind(SocketAddress host, int backlog)",
          "public int getLocalPort()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"public Socket accept() throws IOException\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'public Socket accept() throws IOException'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_244",
        "question": "Which method Returns the port that the server socket is listening on?",
        "code": "",
        "options": [
          "public int getLocalPort()",
          "public void setSoTimeout(int timeout)",
          "public void bind(SocketAddress host, int backlog)",
          "public Socket accept() throws IOException"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"public int getLocalPort()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'public int getLocalPort()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_245",
        "question": "Which of the following are constructors for ServerSocket class?",
        "code": "",
        "options": [
          "public ServerSocket(int port) throws IOException",
          "public ServerSocket(int port, int backlog) throws IOException",
          "All of the above",
          "public ServerSocket(int port, int backlog, InetAddress address) throws IOException"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_246",
        "question": "Which method Sets the time-out value for how long the server socket waits for a client during the accept()?",
        "code": "",
        "options": [
          "public int getLocalPort()",
          "public void setSoTimeout(int timeout)",
          "public Socket accept() throws IOException",
          "public void bind(SocketAddress host, int backlog)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"public void setSoTimeout(int timeout)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'public void setSoTimeout(int timeout)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_247",
        "question": "Which method binds the socket to the specified server and port in the SocketAddress object?",
        "code": "",
        "options": [
          "public void bind(SocketAddress host, int backlog)",
          "public Socket accept() throws IOException",
          "public int getLocalPort()",
          "public void setSoTimeout(int timeout)"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"public void bind(SocketAddress host, int backlog)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'public void bind(SocketAddress host, int backlog)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_248",
        "question": "Which method returns an InetAddress object given the raw IP address?",
        "code": "",
        "options": [
          "String toString()",
          "String getHostAddress()",
          "String getHostName()",
          "static InetAddress getByAddress(byte[] addr)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"static InetAddress getByAddress(byte[] addr)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'static InetAddress getByAddress(byte[] addr)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_249",
        "question": "Which class represents a socket for sending and receiving datagram packets?",
        "code": "",
        "options": [
          "HttpURLPermission",
          "DatagramSocket",
          "HttpCookie",
          "HttpURLConnection"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"DatagramSocket\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'DatagramSocket'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_250",
        "question": "Which exception thrown to indicate that the IP address of a host could not be determined.",
        "code": "",
        "options": [
          "URISyntaxException",
          "SocketTimeoutException",
          "UnknownHostException",
          "UnknownServiceException"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"UnknownHostException\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'UnknownHostException'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_251",
        "question": "_________________class implements client sockets.",
        "code": "",
        "options": [
          "SocketImpl",
          "ServerSocket",
          "SocketAddress",
          "Socket"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Socket\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'Socket'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_252",
        "question": "What is the difference between TCP and UDP?",
        "code": "",
        "options": [
          "All of the above",
          "communication of UDP is not reliable as compared to TCP",
          "TCP is connection-oriented protocol and UDP is connectionless protocol.",
          "TCP reads data as stream and UDP reads data as Datagram’s of packet"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_253",
        "question": "________________ Represents a Uniform Resource Identifier reference.",
        "code": "",
        "options": [
          "URLClassLoader",
          "URLConnection",
          "URL",
          "URI"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"URI\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'URI'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_254",
        "question": "What are advantages of Java Sockets?",
        "code": "",
        "options": [
          "All of the above",
          "Sockets cause low network traffic.",
          "Efficient socket based programming can be easily implemented for general communications.",
          "Sockets are flexible and sufficient."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_255",
        "question": "Which class is used by server applications to obtain a port and listen for client requests?",
        "code": "",
        "options": [
          "java.net.ServerSocket class",
          "java.net.Authenticator",
          "java.net.SocketAddress",
          "java.net.Socket"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"java.net.ServerSocket class\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'java.net.ServerSocket class'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_256",
        "question": "The package _______ contains classes and interfaces that provide a powerful infrastructure for networking in Java.",
        "code": "",
        "options": [
          "java.applet",
          "java.awt",
          "java.rmi",
          "java.net"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"java.net\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'java.net'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_257",
        "question": "__________is a connection-oriented protocol.",
        "code": "",
        "options": [
          "None of the above",
          "Transmission Control Protocol(TCP)",
          "User Datagram Protocol (UDP)",
          "Internet Protocol (IP)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Transmission Control Protocol(TCP)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'Transmission Control Protocol(TCP)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_258",
        "question": "Which of the following are classes of java.net package?",
        "code": "",
        "options": [
          "All of the above.",
          "Authenticator",
          "DatagramSocket",
          "Socket"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_259",
        "question": "Which of the following are Interfaces of java.net package?",
        "code": "",
        "options": [
          "URLStreamHandlerFactory",
          "SocketImplFactory",
          "ProtocolFamily",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_260",
        "question": "The _______class is used to encapsulate both the numerical IP address and the domain name for that address.",
        "code": "",
        "options": [
          "CookieHandler",
          "InetAddress",
          "ContentHandler",
          "CookieManager"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"InetAddress\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'InetAddress'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_261",
        "question": "XML stands for _______.",
        "code": "",
        "options": [
          "Asynchronous JavaScript and XML",
          "Extensible Markup Language",
          "HyperText Markup Language",
          "Hypertext Preprocessor"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Extensible Markup Language\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'Extensible Markup Language'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_262",
        "question": "__________ describes the structure of an XML document.",
        "code": "",
        "options": [
          "DCOM",
          "XML schema",
          "DOM",
          "COM"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"XML schema\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'XML schema'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_263",
        "question": "Which of the following class in the javax.xml.bind package provides the client application the ability to convert a Java content tree back into XML data?",
        "code": "",
        "options": [
          "Document",
          "Unmarshaller",
          "Marshalle",
          "rNone of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Marshalle\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'Marshalle'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_264",
        "question": "XSLT stands for _________.",
        "code": "",
        "options": [
          "Extensible Markup Language",
          "HyperText Markup Language",
          "Extensible Stylesheet Language Transformations",
          "Hypertext Preprocessor"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Extensible Stylesheet Language Transformations\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'Extensible Stylesheet Language Transformations'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_265",
        "question": "The ________ does not define any form of binary interoperability.",
        "code": "",
        "options": [
          "SAX",
          "JAXB",
          "DOM",
          "JAXP"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"DOM\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'DOM'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_266",
        "question": "\"DOM Level 1,\" was recommended by W3C in late __________.",
        "code": "",
        "options": [
          "1994",
          "1997",
          "2000",
          "1998"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"1998\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm '1998'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_267",
        "question": "__________ is not a W3C standard.",
        "code": "",
        "options": [
          "SAX",
          "HTTP",
          "DOM",
          "XML"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"SAX\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'SAX'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_268",
        "question": "Which of the following was designed as a median between DOM and SAX?",
        "code": "",
        "options": [
          "StAX",
          "JAXB",
          "XSLT",
          "JAXP"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"StAX\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'StAX'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_269",
        "question": "__________ defines a factory API that enables applications to configure and obtain a SAX based parser to parse XML documents.",
        "code": "",
        "options": [
          "SAXParserFactory",
          "DTDHandler",
          "EntityResolver",
          "DefaultHandler"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"SAXParserFactory\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'SAXParserFactory'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_270",
        "question": "Which of the following is a correct statement about DOM?",
        "code": "",
        "options": [
          "All of the above",
          "Use DOM when you are calling XPath.",
          "Use DOM when you want to have tree iterations and need to walk through the entire document tree",
          "Use the DOM API when you need to use random access"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_271",
        "question": "________ is a language for finding information in an XML document.",
        "code": "",
        "options": [
          "JAXP",
          "XPath",
          "JAXB",
          "SAX"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"XPath\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'XPath'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_272",
        "question": "XML was designed to___________.",
        "code": "",
        "options": [
          "transport and store data",
          "Compile source code",
          "None of the above.",
          "Display data"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"transport and store data\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'transport and store data'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_273",
        "question": "Which of the following method belongs to the window.history object?",
        "code": "",
        "options": [
          "go()",
          "All of the above",
          "forward()",
          "back()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_274",
        "question": "Comment in XML document is given by",
        "code": "",
        "options": [
          "<!-- comment -->",
          "<%-- comment --%>",
          "/* comment */",
          "All of the above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"<!-- comment -->\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm '<!-- comment -->'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_275",
        "question": "Which of the following is not an XML parser?",
        "code": "",
        "options": [
          "SAX",
          "COM",
          "JDOM",
          "DOM"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"COM\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'COM'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_276",
        "question": "Which of the following XML parser parses an entire XML document and load it into memory, modelling it with Object for easy nodal traversal?",
        "code": "",
        "options": [
          "SAX",
          "JDOM",
          "DCOM.",
          "DOM"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"DOM\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'DOM'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_277",
        "question": "The strength of the ________ specification is that it can scan and parse gigabytes worth of XML documents without hitting resource limits?",
        "code": "",
        "options": [
          "COM.",
          "DOM",
          "JDOM",
          "SAX"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"SAX\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'SAX'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_278",
        "question": "Which of the following java API is for processing XML data using applications written in the Java programming language?",
        "code": "",
        "options": [
          "Channels.",
          "applet",
          "JAXP",
          "CORBA"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"JAXP\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'JAXP'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_279",
        "question": "_________ is a Java standard that defines how Java objects are converted from and to XML.",
        "code": "",
        "options": [
          "JAXP",
          "SAX",
          "JAXB",
          "DOM."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"JAXB\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'JAXB'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_280",
        "question": "What is an XML specification that governs the allowable components of an XML document and the relationships between the components?",
        "code": "",
        "options": [
          "Marshalling",
          "Schema",
          "Unmarshalling",
          "SAX"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Schema\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'Schema'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_281",
        "question": "Class _________ is the root of the class hierarchy.",
        "code": "",
        "options": [
          "notify",
          "Object",
          "clone",
          "equals"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Object\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'Object'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_282",
        "question": "Which method returns the value of the Short as a byte?",
        "code": "",
        "options": [
          "double doubleValue()",
          "float floatValue()",
          "int hashCode()",
          "byte byteValue()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"byte byteValue()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'byte byteValue()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_283",
        "question": "Which method returns the number of one-bits in the two's complement binary representation of the specified int value?",
        "code": "",
        "options": [
          "double doubleValue()",
          "static int bitCount(int i)",
          "byte byteValue()",
          "float floatValue()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"static int bitCount(int i)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'static int bitCount(int i)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_284",
        "question": "Which method parses the string argument as a signed decimal integer?",
        "code": "",
        "options": [
          "static int parseInt(String s, int radix)",
          "static Integer getInteger(String nm, int val)",
          "int intValue()",
          "static int parseInt(String s)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"static int parseInt(String s)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'static int parseInt(String s)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_285",
        "question": "Which Constructor of String class initializes a newly created String object so that it represents an empty character sequence?",
        "code": "",
        "options": [
          "String(byte[] bytes, int offset, int length)",
          "String(byte[] bytes, Charset charset)",
          "String(byte[] bytes)",
          "String()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"String()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'String()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_286",
        "question": "Which method compares two strings lexicographically?",
        "code": "",
        "options": [
          "boolean contentEquals(CharSequence cs)",
          "int compareTo(String anotherString)",
          "boolean contentEquals(StringBuffer sb)",
          "int compareToIgnoreCase(String str)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"int compareTo(String anotherString)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'int compareTo(String anotherString)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_287",
        "question": "Package java.util contains_______________.",
        "code": "",
        "options": [
          "event model",
          "collection classes",
          "date and time facilities",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_288",
        "question": "Which method adds all of the specified elements to the specified collection?",
        "code": "",
        "options": [
          "static <T> int binarySearch(List<? extends T> list, T key, Comparator<? super T< c)",
          "static <T> Queue<T> asLifoQueue(Deque<T> deque)",
          "static <T> int binarySearch(List<? extends Comparable<? super T>> list, T key)",
          "static <T> boolean addAll(Collection<? super T> c, T... elements)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"static <T> boolean addAll(Collection<? super T> c, T... elements)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'static <T> boolean addAll(Collection<? super T> c, T... elements)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_289",
        "question": "Which method returns an unmodifiable view of the specified sorted map?",
        "code": "",
        "options": [
          "static <T> Set<T> unmodifiableSet(Set<? extends T> s)",
          "static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K,? extends V> m)",
          "static <K,V> Map<K,V> unmodifiableMap(Map<? extends K,? extends V> m)",
          "static <T> SortedSet<T> unmodifiableSortedSet(SortedSet<T> s)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K,? extends V> m)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K,? extends V> m)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_290",
        "question": "Which class object represents a specific geographical, political, or cultural region?",
        "code": "",
        "options": [
          "java.util.ListResourceBundle",
          "java.util.Locale",
          "java.util.calendar",
          "java.util.Collections"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"java.util.Locale\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'java.util.Locale'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_291",
        "question": "Which class provides resizable-array and implements the List interface?",
        "code": "",
        "options": [
          "java.util.Hashtable",
          "java.util.HashMap",
          "java.util.ArrayList",
          "java.util.Arrays"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"java.util.ArrayList\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'java.util.ArrayList'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_292",
        "question": "Which method returns the runtime class of the Object?",
        "code": "",
        "options": [
          "toString()",
          "getClass()",
          "clone()",
          "hashCode()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"getClass()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'getClass()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_293",
        "question": "Annotations are mainly used for_________?",
        "code": "",
        "options": [
          "All of the above.",
          "Information for the compiler",
          "Runtime processing",
          "Compiler-time and deployment time processing"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_294",
        "question": "Which method returns a hash code value for the object?",
        "code": "",
        "options": [
          "hashCode()",
          "toString()",
          "getClass()",
          "clone()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"hashCode()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'hashCode()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_295",
        "question": "Which method converts the object to a string?",
        "code": "",
        "options": [
          "toString()",
          "hashCode()",
          "clone()",
          "getClass()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"toString()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'toString()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_296",
        "question": "Which method is called by the garbage collector on an object when garbage collection determines that there are no more references to the object?",
        "code": "",
        "options": [
          "equals()",
          "toString()",
          "finalize()",
          "wait()"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"finalize()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'finalize()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_297",
        "question": "Which method returns True if the argument is not null and is an object of the same type?",
        "code": "",
        "options": [
          "void notify()",
          "protected void finalize()",
          "int hashCode()",
          "boolean equals(Object obj)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"boolean equals(Object obj)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'boolean equals(Object obj)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_298",
        "question": "What are the advantages of Immutable Object?",
        "code": "",
        "options": [
          "Immutable objects are automatically thread-safe",
          "Immutable objects are simple to construct, test, and use",
          "All of the above",
          "No need of a copy constructor for Immutable objects"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_299",
        "question": "Which classes are used to convert any data type into an object?",
        "code": "",
        "options": [
          "Stream classes.",
          "Wrapper classes",
          "None of the above.",
          "Collection classes."
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Wrapper classes\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'Wrapper classes'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_300",
        "question": "Which of the following is/are wrapper classes?",
        "code": "",
        "options": [
          "Integer",
          "Byte",
          "Short",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_301",
        "question": "__________ is the process of designing an application so that it can be adapted to various languages and regions without engineering changes.",
        "code": "",
        "options": [
          "Internationalization",
          "Deserialization",
          "Externalization",
          "Serialization"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Internationalization\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Internationalization'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_302",
        "question": "A/An __________ class is used to make system resource access decisions based on the context it encapsulates.",
        "code": "",
        "options": [
          "Certificate",
          "AccessControlContext",
          "Certificate Factory",
          "X509CertSelector"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"AccessControlContext\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'AccessControlContext'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_303",
        "question": "Which of the following is not a class of java.security package?",
        "code": "",
        "options": [
          "AccessControlContext",
          "BasicPermission",
          "AccessController",
          "AlgorithmConstraints"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"AlgorithmConstraints\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'AlgorithmConstraints'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_304",
        "question": "Which of the following interface of the java.security package defines a set of criteria for selecting Certificates?",
        "code": "",
        "options": [
          "CertSelector",
          "CertPathBuilderResult",
          "CertPathParameters",
          "CertStoreParameters"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"CertSelector\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'CertSelector'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_305",
        "question": "Which of the following class is using for building certification paths?",
        "code": "",
        "options": [
          "CertPathBuilder",
          "CertPath",
          "CertStore.",
          "Certificate"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"CertPathBuilder\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'CertPathBuilder'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_306",
        "question": "When your program needs a locale-specific resource, a String for example, your program can load it from the _______ that is appropriate for the current user's locale.",
        "code": "",
        "options": [
          "Locale",
          "PrintWriter",
          "Serialization",
          "ResourceBundle"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"ResourceBundle\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'ResourceBundle'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_307",
        "question": "Which of the following is not a sub class of ResourceBundle?",
        "code": "",
        "options": [
          "None of the above.",
          "ListResourceBundle",
          "XMLResourseBundle",
          "PropertyResourceBundle"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"XMLResourseBundle\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'XMLResourseBundle'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_308",
        "question": "What does JCA stand for in term of java security?",
        "code": "",
        "options": [
          "Java Connector Architecture",
          "Java Cryptography Extension",
          "Java Cryptography Architecture",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Java Cryptography Architecture\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Java Cryptography Architecture'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_309",
        "question": "Which of the following is a method of MessageDigest class?",
        "code": "",
        "options": [
          "digest()",
          "toString()",
          "getProvider()",
          "All of the above."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_310",
        "question": "Which of the following is a correct statement about digital signatures?",
        "code": "",
        "options": [
          "You also supply your recipient with your public key.",
          "You \"sign\" the document or code using one of your private keys, which you can generate by using keytool or security API methods.",
          "Your recipient uses your public key to verify that your document came from you.",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_311",
        "question": "_______ Class represents a storage facility for cryptographic keys and certificates.",
        "code": "",
        "options": [
          "Certificate",
          "Keystores",
          "None of the above",
          "Digital signatures"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Keystores\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Keystores'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_312",
        "question": "Which of the following term is often abbreviated as l10n?",
        "code": "",
        "options": [
          "Internationalization",
          "Localization",
          "Serialization",
          "Deserialization"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Localization\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Localization'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_313",
        "question": "Which of the following class is designed to provide the functionality of a cryptographic digital signature algorithm such as DSA or RSA with MD5?",
        "code": "",
        "options": [
          "Mac",
          "Cipher",
          "Security",
          "Signature"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Signature\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Signature'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_314",
        "question": "Which of the following is java’s internationalize class?",
        "code": "",
        "options": [
          "All of the above",
          "DecimalFormat",
          "Locale",
          "ResourceBundle"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_315",
        "question": "The binary form of programs running on the Java platform is not native machine code but an intermediate __________.",
        "code": "",
        "options": [
          "bytecode",
          "sourcecode",
          "machinecode",
          "All of the above."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"bytecode\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'bytecode'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_316",
        "question": "Which of the following is a JVM’s task to prevent the program from performing unsafe operations such as branching to incorrect locations which may contain data rather than instructions?",
        "code": "",
        "options": [
          "classification",
          "None of the above.",
          "compilation",
          "verification"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"verification\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'verification'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_317",
        "question": "What java platform does not support to improve the security of java applications?",
        "code": "",
        "options": [
          "unmarshalling",
          "Primitive data types.",
          "marshalling",
          "pointers"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"pointers\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'pointers'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_318",
        "question": "Which of the following is/are security vulnerabilities in Java applications?",
        "code": "",
        "options": [
          "All of the above.",
          "Errors in user programs.",
          "Native libraries.",
          "Sandboxing mechanism."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_319",
        "question": "Which of the following defines a security policy for an application?",
        "code": "",
        "options": [
          "verification",
          "bytecode",
          "Security Manager",
          "JVM."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Security Manager\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Security Manager'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_320",
        "question": "The special method ________ determines whether an access request indicated by a specified permission should be granted or denied.",
        "code": "",
        "options": [
          "checkAccess()",
          "checkPermission(java.security.Permission)",
          "hashCode()",
          "getSecurityContext()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"checkPermission(java.security.Permission)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'checkPermission(java.security.Permission)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_1",
    "title": "Module 1: Giới thiệu Java & Cú pháp cơ bản",
    "description": "Các tính năng cốt lõi của Java, máy ảo JVM, bytecode, biến, kiểu dữ liệu và toán tử cơ bản.",
    "category": "Theo Module",
    "badge": "Syntax & Basics",
    "icon": "☕",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_1",
        "question": "Which of the Following is not the feature of Java?",
        "code": "",
        "options": [
          "Not Robust.",
          "Object Oriented.",
          "Distributed.",
          "Interpreted"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Not Robust.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 1: Giới thiệu Java & Cú pháp cơ bản'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 1: Giới thiệu Java & Cú pháp cơ bản): Chú ý từ khóa trọng tâm 'Not Robust.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_2",
        "question": "When is the Float object, created in line 3, eligible for garbage collection?",
        "code": "public class Dummy {\n    public Object m() {\n        Object o = new Float(3.14F);\n        Object[] oa = new Object[l];\n        oa[0] = o; /* Line 5 */\n        o = null; /* Line 6 */\n        oa[0] = null; /* Line 7 */\n        return o; /* Line 8 */\n    }\n}",
        "options": [
          "just after line 7",
          "just after line 5",
          "just after line 6",
          "just after line 8"
        ],
        "correctAnswer": 0,
        "explanation": "Một đối tượng chỉ đủ điều kiện dọn rác (Garbage Collection) khi không còn bất kỳ biến tham chiếu còn sống nào trỏ tới nó. Ở đây, tại vị trí dòng được chỉ định, biến tham chiếu đã bị gán lại sang đối tượng khác hoặc ra khỏi phạm vi khối lệnh, khiến đối tượng cũ bị mồ côi trên Heap.",
        "tip": "MẸO PHÒNG THI: Lần theo tên biến tham chiếu: khi biến bị gán giá trị mới hoặc gán null -> Ngay sau dòng đó đối tượng ban đầu được phép dọn rác!"
      },
      {
        "id": "q_3",
        "question": "which is the first web browser developed in Java?",
        "code": "",
        "options": [
          "Internet Explorer",
          "HotJava",
          "Netscape Navigator",
          "Opera"
        ],
        "correctAnswer": 1,
        "explanation": "HotJava là trình duyệt web mô-đun đầu tiên được Sun Microsystems viết hoàn toàn bằng Java, là nơi đầu tiên hỗ trợ thực thi Java Applet tương tác trên trang web.",
        "tip": "MẸO PHÒNG THI: Trình duyệt web đầu tiên viết bằng Java -> Chọn 'HotJava'!"
      },
      {
        "id": "q_4",
        "question": "Which is a valid declaration of a String?",
        "code": "",
        "options": [
          "String s4 = (String) '\\ufeed';",
          "String s3 = (String) 'abc';",
          "String s2 = 'null';",
          "String s1 = null;"
        ],
        "correctAnswer": 3,
        "explanation": "String là kiểu đối tượng tham chiếu trong Java, do đó một biến String có thể được gán giá trị hợp lệ bằng một chuỗi văn bản trong dấu nháy kép (\"\") hoặc khởi tạo bằng `null` (vd: `String s1 = null;`).",
        "tip": "MẸO PHÒNG THI: Biến tham chiếu như String luôn có thể gán `= null`!"
      },
      {
        "id": "q_5",
        "question": "Which one of these lists contains only Java programming language keywords?",
        "code": "",
        "options": [
          "goto, instanceof, native, finally, default, throws",
          "class, if, void, long, Int, continue",
          "try, virtual, throw, final, volatile, transient",
          "strictfp, constant, super, implements, do"
        ],
        "correctAnswer": 0,
        "explanation": "Các từ khóa trong danh sách này đều là từ khóa chuẩn của Java: `goto` (reserved), `instanceof`, `native`, `finally`, `default`, `throws`. Lưu ý: `sizeof` là của C/C++, Java không có; `true/false/null` là literals.",
        "tip": "MẸO PHÒNG THI: Bẫy keyword: 'sizeof' không có trong Java; 'goto' và 'const' dù không dùng nhưng vẫn là keyword dành riêng!"
      },
      {
        "id": "q_6",
        "question": "Which three form part of correct array declarations?\nA. public int a [ ]\nB. static int [ ] a\nC. public [ ] int a\nD. private int a [3]\nE. private int [3] a [ ]\nF. public final int [ ] a",
        "code": "",
        "options": [
          "A,C, D",
          "A, B, F",
          "B, D, E",
          "B, E, F"
        ],
        "correctAnswer": 1,
        "explanation": "Khai báo mảng trong Java: Cú pháp hợp lệ cho phép dấu ngoặc vuông `[]` đứng sau kiểu dữ liệu (vd: `int[] a`) hoặc đứng sau tên biến (vd: `int a[]`), có thể kết hợp với các modifier như `public`, `static`, `final`. ĐẶC BIỆT: Tuyệt đối KHÔNG ĐƯỢC chỉ định kích thước trong ngoặc vuông khi khai báo biến (vd: `int[3] a` là lỗi biên dịch).",
        "tip": "MẸO PHÒNG THI: Khai báo mảng hợp lệ KHÔNG ĐƯỢC có số kích thước trong ngoặc (loại ngay các đáp án có int[3]). Dấu [] có thể đứng cạnh int hoặc cạnh tên biến!"
      },
      {
        "id": "q_7",
        "question": "Which one is a valid declaration and initialization of a boolean?",
        "code": "",
        "options": [
          "boolean b1 = 0;",
          "boolean b2 ;",
          "boolean b3 = false;",
          "boolean b5 = no;"
        ],
        "correctAnswer": 2,
        "explanation": "Trong Java, kiểu `boolean` chỉ nhận đúng hai giá trị logic là hằng số `true` hoặc `false` (viết chữ thường, không đặt trong ngoặc kép). Java không cho phép gán số `0`, `1` hay chuỗi \"true\" cho biến boolean nguyên thủy.",
        "tip": "MẸO PHÒNG THI: boolean chỉ nhận `true` hoặc `false`. Các phép gán boolean b = 0 hay boolean b = (1) đều lỗi biên dịch!"
      },
      {
        "id": "q_8",
        "question": "Which of the following is not primitive datatype?",
        "code": "",
        "options": [
          "int",
          "short",
          "byte",
          "enum"
        ],
        "correctAnswer": 3,
        "explanation": "Java có đúng 8 kiểu dữ liệu nguyên thủy (primitive): byte, short, int, long, float, double, char, boolean. Các kiểu như `enum`, `String`, `Array`, `Interface` hay `Class` đều là kiểu dữ liệu tham chiếu (Reference / Non-primitive types).",
        "tip": "MẸO PHÒNG THI: 'NOT primitive' -> Tìm ngay 'enum', 'String', 'Array' hoặc tên class. 8 kiểu nguyên thủy đều viết chữ thường: byte, short, int, long, float, double, char, boolean!"
      },
      {
        "id": "q_9",
        "question": "Which of the following describes the correct default values for array elements of the types indicated?\n1. int - 0\n2. String - \"null\"\n3. Dog - null\n4. char - '\\u0000'\n5. float - 0.0f\n6. boolean - true",
        "code": "",
        "options": [
          "1, 3, 4, 5",
          "1, 2, 3, 4",
          "3, 4, 5, 6",
          "2, 4, 5, 6"
        ],
        "correctAnswer": 0,
        "explanation": "Giá trị mặc định của các phần tử mảng và thuộc tính trong Java: số nguyên (byte, short, int, long) = 0; số thực (float, double) = 0.0f/0.0d; char = '\\u0000' (ký tự null); boolean = false; mọi đối tượng tham chiếu (String, Dog, Object) = null (chứ không phải chuỗi \"null\").",
        "tip": "MẸO PHÒNG THI: Số = 0, char = '\\u0000', boolean = false, Đối tượng = null (giá trị rỗng, không phải chuỗi chữ \"null\")!"
      },
      {
        "id": "q_10",
        "question": "Public Boolean (boolean value) is used to construct ________.",
        "code": "",
        "options": [
          "Integer object",
          "Boolean object.",
          "Float object",
          "None of this."
        ],
        "correctAnswer": 1,
        "explanation": "Constructor `public Boolean(boolean value)` nhận một giá trị boolean nguyên thủy và tạo ra một đối tượng bao bọc kiểu `Boolean object` trên Heap.",
        "tip": "MẸO PHÒNG THI: Constructor của class Boolean tạo ra 'Boolean object'!"
      },
      {
        "id": "q_11",
        "question": "Java source codes are compiled and converted to _______",
        "code": "",
        "options": [
          "Binary codes",
          "Object codes",
          "Byte codes",
          "Assembly codes"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Byte codes\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 1: Giới thiệu Java & Cú pháp cơ bản'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 1: Giới thiệu Java & Cú pháp cơ bản): Chú ý từ khóa trọng tâm 'Byte codes'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_12",
        "question": "Bytes variables are declared by use of the ______ keyword (using primitive data type).",
        "code": "",
        "options": [
          "Byte",
          "bytes",
          "Bytes",
          "byte"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"byte\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 1: Giới thiệu Java & Cú pháp cơ bản'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 1: Giới thiệu Java & Cú pháp cơ bản): Chú ý từ khóa trọng tâm 'byte'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_13",
        "question": "What is the File Extension of java byte codes?",
        "code": "",
        "options": [
          ".java",
          ".class",
          ".bc",
          "None of the above"
        ],
        "correctAnswer": 1,
        "explanation": "Mã nguồn Java được lưu ở tệp tin `.java`, sau khi được trình biên dịch `javac` biên dịch sẽ tạo ra tệp Bytecode có phần mở rộng là `.class` để chạy trên máy ảo JVM.",
        "tip": "MẸO PHÒNG THI: File mã nguồn = `.java` | File chứa mã máy ảo Bytecode = `.class`!"
      },
      {
        "id": "q_14",
        "question": "Which of the following command is used to compile the java application through command prompt, assuming class file “Hello World.java”?",
        "code": "",
        "options": [
          "Compile HelloWorld.java",
          "javac HelloWorld.java",
          "Cmp HelloWorld.java",
          "java HelloWorld"
        ],
        "correctAnswer": 1,
        "explanation": "Để biên dịch mã nguồn Java từ dòng lệnh, ta sử dụng trình biên dịch `javac` kèm tên tệp mã nguồn có phần mở rộng `.java` (ví dụ: `javac HelloWorld.java`). Khi biên dịch thành công, nó sẽ sinh ra tệp bytecode `HelloWorld.class`.",
        "tip": "MẸO PHÒNG THI: Biên dịch -> dùng lệnh 'javac' + tên file đuôi '.java'. Chạy chương trình -> dùng lệnh 'java' + tên class (không đuôi)!"
      },
      {
        "id": "q_15",
        "question": "Which environment variable is one way to tell applications, including the JDK tools, where to look for user classes ?",
        "code": "",
        "options": [
          "PATH",
          "USERPATH",
          "CLASSPATH",
          "NEWPATH"
        ],
        "correctAnswer": 2,
        "explanation": "Biến môi trường `CLASSPATH` trong Java được các công cụ JDK và JVM sử dụng để tìm kiếm các tệp `.class` hoặc các thư viện `.jar` do người dùng định nghĩa.",
        "tip": "MẸO PHÒNG THI: Đường dẫn tìm class -> Chọn ngay 'CLASSPATH'!"
      },
      {
        "id": "q_16",
        "question": "JDK contains _________ .",
        "code": "",
        "options": [
          "None of the above.",
          "Only Development Tools",
          "Only JRE.",
          "Both (JRE+ Development Tools)."
        ],
        "correctAnswer": 3,
        "explanation": "Bộ công cụ phát triển Java (JDK - Java Development Kit) bao gồm: JRE (môi trường thực thi Java, trong đó có JVM và thư viện chuẩn) CỘNG VỚI các công cụ phát triển (Development Tools như javac, jar, javadoc, jdb).",
        "tip": "MẸO PHÒNG THI: Công thức: JDK = JRE + Development Tools (javac, jar...). JRE = JVM + Core Libraries!"
      },
      {
        "id": "q_17",
        "question": "At what line will the Object created on line 10 be eligible for garbage collection?",
        "code": "public class Dummy {\n    class HappyGarbage01 {\n        public static void main(String args[]) {\n            HappyGarbage01 h = new HappyGarbage01();\n            h.methodA(); /* Line 6 */\n        } /* Line 7 */\n\n        Object methodA() /* Line 8 */ {\n            /* Line 9 */\n            Object obj1 = new Object(); /* Line 10 */\n            Object[] obj2 = new Object[1]; /* Line 11 */\n            obj2[0] = obj1;\n            obj1 = null;\n            return obj2[0];\n        }\n    }\n}",
        "options": [
          "After line 9",
          "After line 10",
          "After line 11",
          "Garbage collector never invoked in methodA()"
        ],
        "correctAnswer": 3,
        "explanation": "Đối tượng `obj1` được tạo tại dòng 10 và được gán vào mảng `obj2[0]`. Dù dòng 12 gán `obj1 = null`, tham chiếu tới đối tượng vẫn được giữ bởi phần tử `obj2[0]`. Phương thức `methodA()` sau đó trả về `obj2[0]`, do đó đối tượng vẫn được giữ tham chiếu bên ngoài và không bao giờ đủ điều kiện để bộ thu gom rác (GC) thu dọn trong phạm vi `methodA()`.",
        "tip": "MẸO PHÒNG THI: `obj2[0] = obj1` rồi `return obj2[0]` -> Đối tượng vẫn được trả về và giữ tham chiếu bên ngoài -> Chọn 'Garbage collector never invoked in methodA()'!"
      },
      {
        "id": "q_18",
        "question": "which method run before an object is Garbage collected?",
        "code": "",
        "options": [
          "final",
          "finalize",
          "finally",
          "None of above"
        ],
        "correctAnswer": 1,
        "explanation": "Phương thức `finalize()` thuộc lớp `java.lang.Object` được Garbage Collector tự động gọi một lần duy nhất ngay trước khi đối tượng bị dọn dẹp và giải phóng khỏi bộ nhớ Heap.",
        "tip": "MẸO PHÒNG THI: Phương thức chạy trước khi dọn rác -> Luôn là 'finalize'!"
      },
      {
        "id": "q_19",
        "question": "When is the Bar object, created on line 6, eligible for garbage collection?",
        "code": "public class Dummy {\n    class Bar {}\n\n    class Test {\n        Bar doBar() {\n            Bar b = new Bar(); /* Line 6 */\n            return b; /* Line 7 */\n        }\n\n        public static void main(String args[]) {\n            Test t = new Test(); /* Line 11 */\n            Bar newBar = t.doBar(); /* Line 12 */\n            System.out.println(\"newBar\");\n            newBar = new Bar(); /* Line 14 */\n            System.out.println(\"finishing\"); /* Line 15 */\n        }\n    }\n}",
        "options": [
          "after line 7, when doBar() completes",
          "after line 12",
          "after line 14",
          "after line 15, when main() completes"
        ],
        "correctAnswer": 2,
        "explanation": "Đối tượng `Bar` tạo tại dòng 6 được trả về và gán cho biến `newBar` tại dòng 12. Đến dòng 14, `newBar` được gán sang một đối tượng `new Bar()` hoàn toàn mới, làm mất đi tham chiếu duy nhất tới đối tượng ban đầu tạo ở dòng 6. Do đó, đối tượng tạo ở dòng 6 đủ điều kiện bị thu gom rác ngay sau dòng 14 ('after line 14').",
        "tip": "MẸO PHÒNG THI: Biến tham chiếu `newBar` bị gán lại đối tượng mới ở dòng 14 (`newBar = new Bar(); /* Line 14 */`) -> Đối tượng cũ bị bỏ rơi ngay sau dòng 14 -> Chọn 'after line 14'!"
      },
      {
        "id": "q_20",
        "question": "Which of the following data type come under floating data types?",
        "code": "",
        "options": [
          "Int",
          "Byte",
          "long",
          "double"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"double\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 1: Giới thiệu Java & Cú pháp cơ bản'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 1: Giới thiệu Java & Cú pháp cơ bản): Chú ý từ khóa trọng tâm 'double'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_2",
    "title": "Module 2: Lập trình Hướng đối tượng (OOP Basics)",
    "description": "Khởi tạo đối tượng, hàm dựng constructor, nạp chồng method overloading và phạm vi tham chiếu.",
    "category": "Theo Module",
    "badge": "OOP Core",
    "icon": "📦",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_21",
        "question": "____________ can be defined as the process where one object acquires the properties of another.",
        "code": "",
        "options": [
          "Inheritance",
          "Polymorphism",
          "Abstraction",
          "Encapsulation"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Inheritance\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Inheritance'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_22",
        "question": "_____________ type of class are declared and instantiated within the same statement.",
        "code": "",
        "options": [
          "Local",
          "Anonymous",
          "Member",
          "Nested top-level"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Anonymous\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Anonymous'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_23",
        "question": "____________ aren't allowed to be declared public, protected, private, or static.",
        "code": "",
        "options": [
          "Member",
          "Nested top-level",
          "Local",
          "Anonymous"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Local\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Local'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_24",
        "question": "_______ class is the only class that you can declare static.",
        "code": "",
        "options": [
          "Local",
          "Anonymous",
          "Nested top-level",
          "Member"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Member\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Member'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_25",
        "question": "________ class is a member classes with a static modifier.",
        "code": "",
        "options": [
          "Nested top-level",
          "Local",
          "Member",
          "None of the Above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Nested top-level\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Nested top-level'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_26",
        "question": "_____________ garbage collector in Java uses a parallel version of the young generation collector.",
        "code": "",
        "options": [
          "Throughput Garbage Collector",
          "Concurrent low pause Collector",
          "The Incremental pause collector",
          "None of the Above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Throughput Garbage Collector\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Throughput Garbage Collector'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_27",
        "question": "When an Object becomes Eligible for Garbage Collection?",
        "code": "",
        "options": [
          "If an object has only live references via WeakHashMap it will be eligible for garbage collection",
          "All references of that object explicitly set to null e.g. object = null",
          "All of the Above",
          "Object is created inside a block and reference goes out scope once control exit that"
        ],
        "correctAnswer": 2,
        "explanation": "Một đối tượng chỉ đủ điều kiện dọn rác (Garbage Collection) khi không còn bất kỳ biến tham chiếu còn sống nào trỏ tới nó. Ở đây, tại vị trí dòng được chỉ định, biến tham chiếu đã bị gán lại sang đối tượng khác hoặc ra khỏi phạm vi khối lệnh, khiến đối tượng cũ bị mồ côi trên Heap.",
        "tip": "MẸO PHÒNG THI: Lần theo tên biến tham chiếu: khi biến bị gán giá trị mới hoặc gán null -> Ngay sau dòng đó đối tượng ban đầu được phép dọn rác!"
      },
      {
        "id": "q_28",
        "question": "___________ Keyword can be used to refer current class instance variable.",
        "code": "",
        "options": [
          "Abstraction",
          "Final",
          "Static",
          "this"
        ],
        "correctAnswer": 3,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_29",
        "question": "_________ can be used to invoke current class constructor.",
        "code": "",
        "options": [
          "this",
          "Polymorphism",
          "Final",
          "Encapsulation"
        ],
        "correctAnswer": 0,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_30",
        "question": "__________ keyword can be passed as argument in the constructor call",
        "code": "",
        "options": [
          "Static",
          "this",
          "Final",
          "None of the Above"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_31",
        "question": "________ Keyword can be used to return current class instance.",
        "code": "",
        "options": [
          "Encapsulation",
          "Static",
          "this",
          "Polymorphism"
        ],
        "correctAnswer": 2,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_32",
        "question": "________ is the technique of making the fields in a class private and providing access to the fields via public methods.",
        "code": "",
        "options": [
          "Inheritance",
          "Plymorphism",
          "Interfaces",
          "Encapsulation"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Encapsulation\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Encapsulation'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_33",
        "question": "__________ keyword can be used to invoke current class method (implicitly).",
        "code": "",
        "options": [
          "this",
          "Final",
          "Static",
          "None of the Above"
        ],
        "correctAnswer": 0,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_34",
        "question": "______ is the ability of an object to take on many forms.",
        "code": "",
        "options": [
          "Packages",
          "Polymorphism",
          "Interface",
          "Abstraction"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Polymorphism\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Polymorphism'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_35",
        "question": "________ is used in Java in order to prevent naming conflicts, to control access, to make searching/locating and usage of classes, interfaces, enumerations and annotations easier, etc.",
        "code": "",
        "options": [
          "Polymorphism",
          "Checked Exceptions",
          "Package",
          "Abstraction"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Package\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Package'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_36",
        "question": "Which of the below code block represent correct?",
        "code": "",
        "options": [
          "class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n        int p,q,r;\n        public int addNumbers(int var1, int var2, int var3) {\n            return var1 + var2 + var3;\n        }\n        public void displayMessage() {\n            System.out.println(\"Display Message\");\n        }\n    }",
          "class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n    }\n    int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }",
          "class Test {\n    Test() int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }\n}",
          "class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n    }\n    int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }\n}"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n    }\n    int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }\n}\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'class Test {\n    // Constructor\n    Test(){\n        p = 1;\n        q = 2;\n        r = 3;\n    }\n    int p,q,r;\n    public int addNumbers(int var1, int var2, int var3) {\n        return var1 + var2 + var3;\n    }\n    public void displayMessage() {\n        System.out.println(\"Display Message\");\n    }\n}'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_37",
        "question": "A runtime entity that has state and behaviour is known as _______.",
        "code": "",
        "options": [
          "Object",
          "Class",
          "Instance Variable",
          "Method"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Object\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Object'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_38",
        "question": "What are also known as Static Fields?",
        "code": "",
        "options": [
          "Class Methods",
          "Class Variables",
          "Interface",
          "Abstraction"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Class Variables\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'Class Variables'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_39",
        "question": "_________ definition states that, only the method where the parameter appears can access these variables.",
        "code": "",
        "options": [
          "instance variables",
          "local variables",
          "parameter variables",
          "None of the Above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"parameter variables\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'parameter variables'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_40",
        "question": "________ are created when the object is constructed, and goes away when the object disappears.",
        "code": "",
        "options": [
          "local variables",
          "parameter variables",
          "Interface",
          "instance variables"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"instance variables\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 2: Lập trình Hướng đối tượng (OOP Basics)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 2: Lập trình Hướng đối tượng (OOP Basics)): Chú ý từ khóa trọng tâm 'instance variables'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_3",
    "title": "Module 3: Access Control, Kế thừa & Interface",
    "description": "Quyền truy cập (public, private, protected), kế thừa (inheritance), trừu tượng và interface trong Java.",
    "category": "Theo Module",
    "badge": "Inheritance",
    "icon": "🧬",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_41",
        "question": "Which of the following is/are feature of Interface?",
        "code": "",
        "options": [
          "All of the methods in an interface are abstract",
          "An interface does not contain any constructors",
          "Interface cannot be instantiated",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_42",
        "question": "Which of this keyword can be used to prevent Method overriding?",
        "code": "",
        "options": [
          "finally",
          "final",
          "abstract",
          "protected"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `final` trong Java: 1) Biến `final` trở thành hằng số; 2) Phương thức `final` ngăn cản lớp con ghi đè (cannot be overridden); 3) Lớp `final` ngăn cản kế thừa (cannot be extended, vd lớp `String`, `Math`).",
        "tip": "MẸO PHÒNG THI: Ngăn chặn Method Overriding -> Luôn chọn từ khóa 'final'!"
      },
      {
        "id": "q_43",
        "question": "If a class inheriting an abstract class does not define all of its function then it will be known as ___________.",
        "code": "",
        "options": [
          "A simple class",
          "Nested",
          "abstract",
          "final"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"abstract\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'abstract'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_44",
        "question": "What is the output of this program?",
        "code": "public class Dummy {\n    class A {\n        public int i;\n        private int j;\n    }\n\n    class B extends A {\n        void display() {\n            super.j = super.i + 1;\n            System.out.println(super.i + \" \" + super.j);\n        }\n    }\n\n    class inheritance {\n        public static void main(String args[]) {\n            B obj = new B();\n            obj.i = 1;\n            obj.j = 3;\n            obj.display();\n        }\n    }\n}",
        "options": [
          "Hello",
          "Compiler error",
          "Run time error",
          "Hi"
        ],
        "correctAnswer": 1,
        "explanation": "Thuộc tính `j` được khai báo là `private` trong lớp `A` (`private int j;`). Theo nguyên tắc đóng gói của Java, các thành viên `private` chỉ có thể được truy cập bên trong nội bộ lớp `A`, lớp con `B` (`super.j`) và các lớp bên ngoài như `inheritance` (`obj.j`) không thể truy cập trực tiếp, dẫn đến lỗi biên dịch (Compile-time error: *j has private access in A*).",
        "tip": "MẸO PHÒNG THI: Thấy biến lớp cha khai báo là `private`, mà lớp con hoặc hàm main gọi `.j` trực tiếp -> Chắc chắn 100% chọn 'Compiler error'!"
      },
      {
        "id": "q_45",
        "question": "Which of the following statement is incorrect?",
        "code": "",
        "options": [
          "public members of class can be accessed by any code in the program",
          "protected members of a class can be inherited by a sub class, and become private members of the sub class",
          "private members of class can only be accessed by other members of the class",
          "private members of class can be inherited by a sub class, and become protected members in sub class"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"private members of class can be inherited by a sub class, and become protected members in sub class\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'private members of class can be inherited by a sub class, and become protected members in sub class'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_46",
        "question": "Which of the following is supported by method overriding in java?",
        "code": "",
        "options": [
          "Abstraction",
          "encapsulation",
          "polymorphism",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"polymorphism\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'polymorphism'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_47",
        "question": "Which of the following is advantage of inheritance in java?",
        "code": "",
        "options": [
          "Data hiding",
          "Extensibility",
          "Reusability",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_48",
        "question": "Which keyword is used to invoke super class constructor explicitly in java?",
        "code": "",
        "options": [
          "this",
          "Super",
          "base",
          "extends"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `super` trong Java được dùng để tham chiếu trực tiếp đến lớp cha: `super()` gọi constructor của lớp cha (phải nằm ở dòng đầu tiên của constructor lớp con); `super.method()` hoặc `super.variable` truy cập phương thức/biến của lớp cha khi bị lớp con che khuất hoặc ghi đè.",
        "tip": "MẸO PHÒNG THI: Thấy 'super class' hoặc 'invoke super class constructor' -> Chọn ngay 'super' (hoặc 'Super')!"
      },
      {
        "id": "q_49",
        "question": "What will be output of following program?",
        "code": "public class Dummy {\n    interface A {\n        public void method1();\n    }\n\n    class One implements A {\n        public void method1() {\n            System.out.println(\"hello\");\n        }\n    }\n\n    class Two extends One {}\n\n    public class Test extends Two {\n        public static void main(String[] args) {\n            A a;\n            Two t = new Two();\n            a = t;\n            a.method1();\n        }\n    }\n}",
        "options": [
          "hello",
          "Compilation error",
          "Runtime error",
          "None of the above"
        ],
        "correctAnswer": 0,
        "explanation": "Lớp `One` cài đặt giao diện `A` và định nghĩa phương thức `method1()` in ra chữ \"hello\". Lớp `Two` kế thừa `One`. Khi khai báo biến tham chiếu `A a;` và gán `a = t;` (với `t` là thể hiện của `Two`), gọi `a.method1()` sẽ kích hoạt cơ chế đa hình runtime và gọi phương thức `method1()` của lớp `One`, in ra màn hình chuỗi \"hello\".",
        "tip": "MẸO PHÒNG THI: Đa hình giao diện (Interface Polymorphism): `One` implements `A` và in ra \"hello\", đối tượng `Two` kế thừa `One` -> Khi gọi qua tham chiếu `A` sẽ in ra 'hello'!"
      },
      {
        "id": "q_50",
        "question": "If there are data fields’ defined in an interface, then they are implicitly defined to be __________.",
        "code": "",
        "options": [
          "Public",
          "static",
          "public, static and final",
          "final"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"public, static and final\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'public, static and final'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_51",
        "question": "What is the most restrictive access modifier that will allow members of one class to have access to members of another class in the same package?",
        "code": "",
        "options": [
          "Public",
          "protected",
          "Default",
          "abstract"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Default\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Default'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_52",
        "question": "If a variable or method is defined as ______, it is accessible by other members within same class. It is not accessible to members of other class.",
        "code": "",
        "options": [
          "Protected",
          "Public",
          "Private",
          "Default"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Private\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Private'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_53",
        "question": "An object of a sub class can be referred by its super class is known as _________.",
        "code": "",
        "options": [
          "down-casting",
          "simple casting",
          "up-casting",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Từ khóa `super` trong Java được dùng để tham chiếu trực tiếp đến lớp cha: `super()` gọi constructor của lớp cha (phải nằm ở dòng đầu tiên của constructor lớp con); `super.method()` hoặc `super.variable` truy cập phương thức/biến của lớp cha khi bị lớp con che khuất hoặc ghi đè.",
        "tip": "MẸO PHÒNG THI: Thấy 'super class' hoặc 'invoke super class constructor' -> Chọn ngay 'super' (hoặc 'Super')!"
      },
      {
        "id": "q_54",
        "question": "Which of the following is not a Marker Interface?",
        "code": "",
        "options": [
          "Serializable",
          "Collection",
          "Cloneable",
          "EventListner"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Collection\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Collection'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_55",
        "question": "Which of the following is true about the usage of super keyword?",
        "code": "",
        "options": [
          "Super is used to invoke immediate parent class methods",
          "Super() is used to invoke immediate parent class constructor",
          "Super is used to refer to immediate parent class instance variable",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_56",
        "question": "Which of the following is cannot have a subclass in java?",
        "code": "",
        "options": [
          "None of the above",
          "Parent Class",
          "Abstract Class",
          "Final Class"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Final Class\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Final Class'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_57",
        "question": "Which type of inheritance is not supported by in java?",
        "code": "",
        "options": [
          "Multilevel",
          "Hierarchical",
          "single",
          "Multiple"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Multiple\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Multiple'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_58",
        "question": "Which of the following is a predefined package in java?",
        "code": "",
        "options": [
          "lang Package",
          "util package",
          "io package",
          "All of the above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"lang Package\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'lang Package'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_59",
        "question": "What is process of defining two or more methods within same class that have same name but different parameters declaration?",
        "code": "",
        "options": [
          "Method Overloading",
          "Method Overridding",
          "Method hiding",
          "Method Invoking"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Method Overloading\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'Method Overloading'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_60",
        "question": "Which of these is correct way of inheriting class Vehicle by class Car?",
        "code": "",
        "options": [
          "class Vehicle + class Car {}",
          "class Vehicle extends Car {}",
          "class Vehicle extends class Car {}",
          "class Vehicle implements class Car {}"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"class Vehicle extends Car {}\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 3: Access Control, Kế thừa & Interface'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 3: Access Control, Kế thừa & Interface): Chú ý từ khóa trọng tâm 'class Vehicle extends Car {}'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_4",
    "title": "Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa",
    "description": "Bộ thu gom rác Garbage Collection, vòng đời đối tượng, JavaBeans và các từ khóa đặc biệt (final, static, transient).",
    "category": "Theo Module",
    "badge": "Memory & GC",
    "icon": "🧠",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_61",
        "question": "Which of the following are the types of comments in Java?",
        "code": "",
        "options": [
          "Documentation Comment",
          "Block Comment",
          "Single Line Comment",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_62",
        "question": "Which of the following option will not compile?",
        "code": "",
        "options": [
          "short s = 20;",
          "char c='a';",
          "byte b=128;",
          "double d=3.4;"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"byte b=128;\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'byte b=128;'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_63",
        "question": "In java,_______ can only test for equality, whereas _______can evaluate any type of the Boolean expression.",
        "code": "",
        "options": [
          "switch, if",
          "if, switch",
          "if, continue",
          "if, break"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"switch, if\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'switch, if'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_64",
        "question": "What is the output of following snippet?",
        "code": "public class Dummy {\n    class Bitwise {\n        public static void main(String[] args) {\n            int x = 11 & 9;\n            int y = x ^ 3;\n            System.out.println(y | 12);\n        }\n    }\n}",
        "options": [
          "None of above",
          "4",
          "10",
          "14"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"14\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm '14'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_65",
        "question": "Which is true about a method-local inner class?",
        "code": "",
        "options": [
          "It must be marked final",
          "It can be marked abstract",
          "It can be marked public",
          "It can be marked static"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"It can be marked abstract\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'It can be marked abstract'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_66",
        "question": "Which statement is true about a static nested class?",
        "code": "",
        "options": [
          "You must have a reference to an instance of the enclosing class in order to instantiate it.",
          "It's variables and methods must be static",
          "It must extend the enclosing class",
          "It does not have access to non static members of the enclosing class."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"It does not have access to non static members of the enclosing class.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'It does not have access to non static members of the enclosing class.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_67",
        "question": "Which part of the memory is involved in Garbage Collection?",
        "code": "",
        "options": [
          "Stack",
          "None of the Above",
          "Both 1 & 2",
          "Heap"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Heap\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'Heap'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_68",
        "question": "What are the different ways to make an object eligible for Garbage Collection when it is no longer needed?",
        "code": "",
        "options": [
          "Object is created inside a block and reference goes out scope once control exit that block",
          "Make the reference variable to refer to another object",
          "Set all available object references to null",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Một đối tượng chỉ đủ điều kiện dọn rác (Garbage Collection) khi không còn bất kỳ biến tham chiếu còn sống nào trỏ tới nó. Ở đây, tại vị trí dòng được chỉ định, biến tham chiếu đã bị gán lại sang đối tượng khác hoặc ra khỏi phạm vi khối lệnh, khiến đối tượng cũ bị mồ côi trên Heap.",
        "tip": "MẸO PHÒNG THI: Lần theo tên biến tham chiếu: khi biến bị gán giá trị mới hoặc gán null -> Ngay sau dòng đó đối tượng ban đầu được phép dọn rác!"
      },
      {
        "id": "q_69",
        "question": "Which of the statement(s) is/are correct regarding the garbage collector?",
        "code": "",
        "options": [
          "Garbage collector is responsible for de-allocating memory",
          "Garbage collector is responsible for ensuring that any referenced objects remain in memory",
          "Garbage collector is responsible for recovering memory used by objects that are no longer reachable from references in executing code",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_70",
        "question": "Which of the following is way to call garbage collector?",
        "code": "",
        "options": [
          "Runtime.getRuntime().runFinalizersOnExit(boolean value)",
          "delete();",
          "System.gc();",
          "finalize()"
        ],
        "correctAnswer": 2,
        "explanation": "Cơ chế thu gom rác trong Java: Việc gọi `System.gc()` chỉ là gửi lời yêu cầu/đề nghị đến JVM, không thể ép buộc GC chạy ngay lập tức. Nếu các biến vẫn còn được tham chiếu (như được lưu vào mảng hoặc return ra ngoài), đối tượng sẽ không bao giờ bị GC thu hồi. Đáp án: System.gc();.",
        "tip": "MẸO PHÒNG THI: Đối tượng còn được return hoặc còn nằm trong mảng sống -> GC không bao giờ dọn dẹp được!"
      },
      {
        "id": "q_71",
        "question": "Which of the following is called accessor method in java?",
        "code": "",
        "options": [
          "set",
          "get",
          "None of the Above",
          "gets"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"get\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'get'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_72",
        "question": "Which of the following statement is true about Java?",
        "code": "",
        "options": [
          "A package statement if present must be the first statement of the program",
          "If a Java program defines a package and import statement, then the import statement must come before the package statement",
          "If an import statement is present, it must appear before any class or interface definitions",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_73",
        "question": "Which of the following is called mutators method in java?",
        "code": "",
        "options": [
          "Set",
          "Setter",
          "Getter",
          "Get"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Set\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'Set'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_74",
        "question": "Which one of the following is base class of all classes?",
        "code": "",
        "options": [
          "Java.lang.System",
          "Java.lang.Process",
          "Java.lang.ClassLoader",
          "Java.lang.Object"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Java.lang.Object\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'Java.lang.Object'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_75",
        "question": "Which of the following package is imported by default?",
        "code": "",
        "options": [
          "Java.io.*;",
          "Java.awt.*;",
          "Java.lang.*;",
          "Java.net.*;"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Java.lang.*;\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'Java.lang.*;'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_76",
        "question": "A top level class may have only the following access modifier. Select the one correct answer.",
        "code": "",
        "options": [
          "private",
          "protected",
          "default",
          "public"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"public\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'public'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_77",
        "question": "Which declaration of the main method below would allow a class to be started as a standalone program?",
        "code": "",
        "options": [
          "public static int main(char args[])",
          "public static void main(String args[])",
          "public static void MAIN(String args[])",
          "public static void main(String args)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"public static void main(String args[])\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'public static void main(String args[])'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_78",
        "question": "Which of the following is a Java keyword?",
        "code": "",
        "options": [
          "extends",
          "transient",
          "synchronized",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_79",
        "question": "Using which keyword we can access value of the instance variables and class variables of that class inside the method of that class itself.",
        "code": "",
        "options": [
          "super",
          "instance of",
          "this",
          "Transient"
        ],
        "correctAnswer": 2,
        "explanation": "Từ khóa `this` trong Java đại diện cho đối tượng hiện tại của lớp: 1) `this.variable` tham chiếu biến instance hiện tại (tránh trùng tên tham số); 2) `this()` gọi constructor khác của chính lớp hiện tại; 3) `this` có thể được truyền làm tham số hoặc trả về đối tượng hiện tại từ phương thức.",
        "tip": "MẸO PHÒNG THI: Thấy 'current class instance variable', 'current class constructor', hoặc truyền chính đối tượng làm tham số -> 100% chọn 'this'!"
      },
      {
        "id": "q_80",
        "question": "By using ................... you can force immediate termination of a loop, by passing the conditional expression and any remaining code in the body of the loop",
        "code": "",
        "options": [
          "continue",
          "terminate",
          "None of the Above",
          "break"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"break\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 4: Quản lý Bộ nhớ, Java Beans & Từ khóa): Chú ý từ khóa trọng tâm 'break'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_5",
    "title": "Module 5: Java Collections Framework",
    "description": "List, Set, Map, ArrayList, LinkedList, HashMap, HashSet, Iterator, Comparable và Comparator.",
    "category": "Theo Module",
    "badge": "Collections",
    "icon": "📚",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_81",
        "question": "Which of the following is concrete class in collection framework that directly implements Collection?",
        "code": "",
        "options": [
          "Set",
          "None of Above",
          "List",
          "Map"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"None of Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'None of Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_82",
        "question": "Which of the following package contain Observable Class?",
        "code": "",
        "options": [
          "java.net",
          "java.util",
          "java.awt",
          "None of above"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"java.util\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'java.util'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_83",
        "question": "Which of the following is true about Queue in java?",
        "code": "",
        "options": [
          "Both Options 1 and 3",
          "Queue is an interface",
          "Queue is class",
          "Collection is super interface of Queue"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Both Options 1 and 3\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'Both Options 1 and 3'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_84",
        "question": "Which of these is an incorrect form of using method max() to obtain maximum element?",
        "code": "",
        "options": [
          "max(Comparator comp)",
          "max(List c)",
          "max(Collection c)",
          "max(Collection c, Comparator comp)"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"max(Comparator comp)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'max(Comparator comp)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_85",
        "question": "Which of these methods can randomize all elements in a list?",
        "code": "",
        "options": [
          "rand()",
          "shuffle()",
          "max(List l)",
          "randomize()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"shuffle()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'shuffle()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_86",
        "question": "Which of these methods can convert an object into a List?",
        "code": "",
        "options": [
          "ConvertList()",
          "SetList()",
          "singletonList()",
          "CopyList()"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"singletonList()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'singletonList()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_87",
        "question": "Which of these is true about unmodifiableCollection () method?",
        "code": "",
        "options": [
          "unmodifiableCollection () method is available for all collection.",
          "UnmodifiableCollection () is defined in Collection class.",
          "unmodifiableCollection () returns a collection that cannot be modified.",
          "All of above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'All of above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_88",
        "question": "Which of these is static field defined in Collections?",
        "code": "",
        "options": [
          "EMPTY_MAP",
          "All of above",
          "EMPTY_LIST",
          "EMPTY_SET"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'All of above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_89",
        "question": "What is the output of this program?",
        "code": "import java.util.*;\npublic class Dummy {\n    public static void main(String args[]) {\n        LinkedList<Integer> list = new LinkedList<>();\n        list.add(2);\n        list.add(8);\n        list.add(5);\n        list.add(1);\n\n        Iterator<Integer> i = list.iterator();\n        Collections.reverse(list);\n\n        while (i.hasNext()) {\n            System.out.print(i.next() + \" \");\n        }\n    }\n}",
        "options": [
          "1 5 8 2",
          "2 1 8 5",
          "2",
          "2 8 5 1"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"1 5 8 2\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm '1 5 8 2'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_90",
        "question": "Which of the following is true about hasNext () method of Iterator?",
        "code": "",
        "options": [
          "Return next element.",
          "Returns false if there are more elements. Otherwise, returns true.",
          "elements. Otherwise, returns false.",
          "None of above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"elements. Otherwise, returns false.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'elements. Otherwise, returns false.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_91",
        "question": "Which of the following method is used to remove element form collection during iteration?",
        "code": "",
        "options": [
          "delete()",
          "removeAt()",
          "None of above",
          "remove()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"remove()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'remove()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_92",
        "question": "You need to store elements in a collection that guarantees that no duplicates are stored and all elements can be accessed in natural order. Which interface provides that capability?",
        "code": "",
        "options": [
          "java.util.Map",
          "java.util.Set",
          "java.util.List",
          "All of above"
        ],
        "correctAnswer": 1,
        "explanation": "Giao diện `Set` (như HashSet, TreeSet, LinkedHashSet) được thiết kế để chỉ chứa các phần tử DUY NHẤT (không cho phép trùng lặp).",
        "tip": "MẸO PHÒNG THI: 'No duplicates' hoặc 'unique elements' -> 100% chọn 'Set'!"
      },
      {
        "id": "q_93",
        "question": "Which of the following is true about Observer?",
        "code": "",
        "options": [
          "Observer interface present in java.util package.",
          "All of above",
          "Observer contain update() method",
          "Observer is interface."
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'All of above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_94",
        "question": "Which interface does java.util.Hashtable implement?",
        "code": "",
        "options": [
          "Java.util.Map",
          "Java.util.Collection",
          "Java.util.List",
          "Java.util.HashTable"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Java.util.Map\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'Java.util.Map'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_95",
        "question": "Which interface provides the capability to store objects using a key-value pair?",
        "code": "",
        "options": [
          "Java.util.Set",
          "Java.util.List",
          "None of above",
          "Java.util.Map"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Java.util.Map\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'Java.util.Map'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_96",
        "question": "Which of these packages contain all the collection classes?",
        "code": "",
        "options": [
          "java.net",
          "java.awt",
          "java.util",
          "java.lang"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"java.util\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'java.util'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_97",
        "question": "Which of these methods deletes all the elements from invoking collection?",
        "code": "",
        "options": [
          "clear()",
          "refresh()",
          "reset()",
          "delete()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"clear()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'clear()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_98",
        "question": "What is Collection in Java?",
        "code": "",
        "options": [
          "None of above",
          "A group of interfaces",
          "A group of objects",
          "A group of classes"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"A group of objects\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'A group of objects'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_99",
        "question": "What is the output of this program?",
        "code": "import java.util.*;\n\nclass stack {\n    public static void main(String args[]) {\n        Stack obj = new Stack();\n        obj.push(new Integer(3));\n        obj.push(new Integer(2));\n        obj.pop();\n        obj.push(new Integer(5));\n        System.out.println(obj);\n    }\n}",
        "options": [
          "[3, 5]",
          "[3, 2, 5]",
          "[3, 5, 2]",
          "[3, 2]"
        ],
        "correctAnswer": 0,
        "explanation": "Lớp `Stack` hoạt động theo nguyên lý LIFO (Last-In First-Out):\n1. `push(3)` -> Stack: [3]\n2. `push(2)` -> Stack: [3, 2]\n3. `pop()` -> Lấy phần tử trên đỉnh là 2 ra -> Stack còn: [3]\n4. `push(5)` -> Stack: [3, 5]\nKết quả in ra đối tượng Stack là `[3, 5]`.",
        "tip": "MẸO PHÒNG THI: Stack LIFO: Đẩy 3, đẩy 2, pop (bỏ 2), đẩy 5 -> Còn lại [3, 5]!"
      },
      {
        "id": "q_100",
        "question": "Which of the following is collection sort pairs in map?",
        "code": "",
        "options": [
          "TreeMap",
          "HashMap",
          "Collection",
          "List"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"TreeMap\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 5: Java Collections Framework'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 5: Java Collections Framework): Chú ý từ khóa trọng tâm 'TreeMap'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_6",
    "title": "Module 6: Xử lý Ngoại lệ (Exception Handling)",
    "description": "Khối try-catch-finally, throw, throws, checked vs unchecked exceptions và custom exceptions.",
    "category": "Theo Module",
    "badge": "Exceptions",
    "icon": "⚠️",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_101",
        "question": "____________ is the superclass of all errors and exceptions in the Java language.",
        "code": "",
        "options": [
          "RuntimeException",
          "Throwable",
          "Exception",
          "Error"
        ],
        "correctAnswer": 1,
        "explanation": "Lớp `java.lang.Throwable` là lớp cha cao nhất (superclass) của toàn bộ hệ thống ngoại lệ và lỗi trong Java, chia thành hai nhánh con chính là `Error` và `Exception`.",
        "tip": "MẸO PHÒNG THI: Superclass của mọi ngoại lệ và lỗi -> Chọn 'Throwable'!"
      },
      {
        "id": "q_102",
        "question": "What is wrong with the following code?",
        "code": "public class MyClass {\n    public static void main(String[] args) throws A {\n        try {\n            f();\n        } finally {\n            System.out.println(\"Done.\");\n        } catch (A e) {\n            throw e;\n        }\n    }\n    public static void f() throws B {\n        throw new B();\n    }\n}\nclass A extends Throwable {}\nclass B extends A {}",
        "options": [
          "The finally block must follow the catch block in the main() method.",
          "The main() method must declare that it throws B.",
          "A single try block cannot be followed by both a finally and a catch block.",
          "The catch block in the main() method must declare that it catches B rather than A."
        ],
        "correctAnswer": 0,
        "explanation": "Trong cú pháp Java, cấu trúc khối `try-catch-finally` bắt buộc khối `finally` phải luôn đứng ở cuối cùng sau tất cả các khối `catch`. Việc đặt `finally` trước `catch` (`try { ... } finally { ... } catch { ... }`) vi phạm ngữ pháp Java dẫn đến lỗi biên dịch.",
        "tip": "MẸO PHÒNG THI: Thứ tự bất biến trong Java là `try -> catch -> finally`. Thấy `finally` nằm trước `catch` -> Chọn ngay 'The finally block must follow the catch block'!"
      },
      {
        "id": "q_103",
        "question": "What will happen when you attempt to compile and run the following code?",
        "code": "public class MyIf {\n    boolean b;\n\n    public static void main(String argv[]) {\n        MyIf mi = new MyIf();\n    }\n\n    MyIf() {\n        if (b) {\n            System.out.println(\"The value of b was true\");\n        } else {\n            System.out.println(\"The value of b was false\");\n        }\n    }\n}",
        "options": [
          "Compile time error, cannot simultaneously create and assign value for boolean value.",
          "Compile time error variable b was not initialised.",
          "Compilation without error and run with output “The value of b was false”.",
          "Compile time error the parameter to the if operator must evaluate to a Boolean."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Compilation without error and run with output “The value of b was false”.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'Compilation without error and run with output “The value of b was false”.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_104",
        "question": "What will happen when you attempt to compile and run this code?",
        "code": "public class MyIf {\n    public static void main(String argv[]) {\n        MyIf mi = new MyIf();\n    }\n    MyIf() {\n        boolean b = false;\n        if (b = false) {\n            System.out.println(\"The value of b is \" + b);\n        }\n    }\n}",
        "options": [
          "Run time error, a boolean cannot be appended using the + operator.",
          "Compile time error, cannot simultaneously create and assign value for Boolean value.",
          "Compile time error the parameter to the if operator must evaluate to a Boolean.",
          "Compilation and run with no output"
        ],
        "correctAnswer": 3,
        "explanation": "Trong Java, cú pháp điều kiện là chữ thường `if (b = false)`. Phép gán `b = false` gán giá trị `false` cho biến `b` và trả về chính giá trị `false` (kiểu boolean hợp lệ nên biên dịch hoàn toàn thành công). Do điều kiện trong `if` là `false`, khối lệnh in ra màn hình bị bỏ qua. Kết quả: Chương trình biên dịch thành công và chạy nhưng không in ra bất kỳ output nào ('Compilation and run with no output').",
        "tip": "MẸO PHÒNG THI: Thấy `if (b = false)` với kiểu boolean -> Biên dịch hoàn toàn hợp lệ nhưng điều kiện là `false` nên KHÔNG in ra gì cả -> Chọn 'Compilation and run with no output'!"
      },
      {
        "id": "q_105",
        "question": "What, if anything, would cause the following code not to compile?",
        "code": "class A {\n    void f() throws ArithmeticException {\n        // ...\n    }\n}\n\npublic class MyClass extends A {\n    public static void main(String[] args) {\n        A obj = new MyClass();\n        try {\n            obj.f();\n        } catch (ArithmeticException e) {\n            return;\n        } catch (Exception e) {\n            System.out.println(e);\n            throw new RuntimeException(\"Something wrong here\");\n        }\n    }\n\n    // InterruptedException is a direct subclass of Exception.\n    void f() throws InterruptedException {\n        // ...\n    }\n}",
        "options": [
          "The main() method must declare that it throws RuntimeException.",
          "You cannot throw exceptions from a catch block.",
          "The compiler will complain that the catch(ArithmeticException) block shadowsthe catch(Exception) block.",
          "Nothing is wrong with the code, it will compile without errors."
        ],
        "correctAnswer": 0,
        "explanation": "Ngoại lệ Unchecked (không bắt buộc try-catch khi biên dịch) là tất cả các lớp kế thừa từ `RuntimeException` và `Error` (ví dụ: NullPointerException, ArrayIndexOutOfBoundsException).",
        "tip": "MẸO PHÒNG THI: Unchecked Exception = Kế thừa từ RuntimeException!"
      },
      {
        "id": "q_106",
        "question": "What will happen when you attempt to compile and run this code?",
        "code": "public class exceptions {\n    public static void main(String Args[]) {\n        int[] array = new int[3];\n        try {\n            for (int i = 0; i < 4; ++i) {\n                array[i] = i;\n            }\n            System.out.println(array);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"ArrayIndexOutOfBoundsException!!\");\n        }\n    }\n}",
        "options": [
          "The program will print 0 1 2 4 in that order.",
          "Compile time errors.",
          "The program will throw ArrayIndexOutOfBoundsException.",
          "The program will only print 0 1 2 in that order."
        ],
        "correctAnswer": 2,
        "explanation": "Mảng `array` có kích thước là 3 (các chỉ số hợp lệ là 0, 1, 2). Vòng lặp `for (int i = 0; i < 4; ++i)` khi chạy đến `i = 3` sẽ truy cập `array[3]`, vượt quá giới hạn mảng nên chương trình sẽ ném ra ngoại lệ `ArrayIndexOutOfBoundsException` tại runtime.",
        "tip": "MẸO PHÒNG THI: Mảng `new int[3]` mà lặp `i < 4` -> Chắc chắn văng ngoại lệ `ArrayIndexOutOfBoundsException`!"
      },
      {
        "id": "q_107",
        "question": "Which of the following is not Java Checked Exceptions?",
        "code": "",
        "options": [
          "NumberFormatException.",
          "ClassNotFoundException.",
          "IllegalAccessException.",
          "CloneNotSupportedException."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"NumberFormatException.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'NumberFormatException.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_108",
        "question": "The _________ blocks are skipped for all normal exits from the ____ block where no exceptions were raised, and control is transferred to the __________ block if one is specified.",
        "code": "",
        "options": [
          "catch,try,finally",
          "try, continue,throw",
          "try,catch,finally",
          "try,catch,final"
        ],
        "correctAnswer": 2,
        "explanation": "Khối `finally` luôn luôn được thực thi dù trong khối `try` có xảy ra ngoại lệ hay không, và kể cả khi trong khối `try` có lệnh `return`. Trường hợp duy nhất finally không chạy là khi hệ thống gọi `System.exit(0)` hoặc JVM bị tắt đột ngột.",
        "tip": "MẸO PHÒNG THI: Thấy 'always executed' -> Chọn 'finally'!"
      },
      {
        "id": "q_109",
        "question": "Which of the following methods is not used to query an exception?",
        "code": "",
        "options": [
          "void printStackTrace()",
          "String getMessage()",
          "String toString()",
          "fillInStackTrace()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"fillInStackTrace()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'fillInStackTrace()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_110",
        "question": "Which of the following is correct statement regarding the below code?\ntry {\n    // some code\n} finally {\n}",
        "code": "",
        "options": [
          "Illegal syntax for try-finally.",
          "It is a legal syntax.",
          "catch block is missing.",
          "Compilation will fail."
        ],
        "correctAnswer": 1,
        "explanation": "Khối `finally` luôn luôn được thực thi dù trong khối `try` có xảy ra ngoại lệ hay không, và kể cả khi trong khối `try` có lệnh `return`. Trường hợp duy nhất finally không chạy là khi hệ thống gọi `System.exit(0)` hoặc JVM bị tắt đột ngột.",
        "tip": "MẸO PHÒNG THI: Thấy 'always executed' -> Chọn 'finally'!"
      },
      {
        "id": "q_111",
        "question": "Which type of exception is created in following case?",
        "code": "class TestClass extends Exception { }",
        "options": [
          "Checked exception",
          "Unchecked exception",
          "None of the above",
          "Neither Checked nor Unchecked exception"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Checked exception\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'Checked exception'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_112",
        "question": "____________ class is the base of all the exception classes.",
        "code": "",
        "options": [
          "RuntimeException",
          "Error",
          "Exception",
          "Throwable"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Exception\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'Exception'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_113",
        "question": "Which type of exception is created in following case?",
        "code": "class TestClass extends NullPonterExcpetion { }",
        "options": [
          "Neither Checked nor Unchecked exception",
          "Checked exception",
          "Unchecked exception",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Ngoại lệ Unchecked (không bắt buộc try-catch khi biên dịch) là tất cả các lớp kế thừa từ `RuntimeException` và `Error` (ví dụ: NullPointerException, ArrayIndexOutOfBoundsException).",
        "tip": "MẸO PHÒNG THI: Unchecked Exception = Kế thừa từ RuntimeException!"
      },
      {
        "id": "q_114",
        "question": "Which of the following is Java Unchecked RuntimeException?:",
        "code": "",
        "options": [
          "IllegalAccessException",
          "ClassNotFoundException",
          "ArithmeticException",
          "CloneNotSupportedException"
        ],
        "correctAnswer": 2,
        "explanation": "Ngoại lệ Unchecked (không bắt buộc try-catch khi biên dịch) là tất cả các lớp kế thừa từ `RuntimeException` và `Error` (ví dụ: NullPointerException, ArrayIndexOutOfBoundsException).",
        "tip": "MẸO PHÒNG THI: Unchecked Exception = Kế thừa từ RuntimeException!"
      },
      {
        "id": "q_115",
        "question": "___________ Method is used to supply the user with information about the trace that the exception has gone through inside the application/code.",
        "code": "",
        "options": [
          "getMessage()",
          "toString()",
          "getClause()",
          "printStackTrace ()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"printStackTrace ()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'printStackTrace ()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_116",
        "question": "Which of the following is not the method of Throwable class?",
        "code": "",
        "options": [
          "void printStackTrace(PrintStream s)",
          "void printStackTrace(OutputStream s)",
          "void printStackTrace(PrintWriter s)",
          "void printStackTrace()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"void printStackTrace(OutputStream s)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'void printStackTrace(OutputStream s)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_117",
        "question": "________________exception is typically thrown by the JVM when an attempt is made to use the null value as a reference value to refer to an object.",
        "code": "",
        "options": [
          "ArrayIndexOutOfBoundsException",
          "NullPointerException",
          "ClassNotFoundException",
          "IllegalStateException"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"NullPointerException\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'NullPointerException'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_118",
        "question": "Which of the following is not true about Error Class?",
        "code": "",
        "options": [
          "Errors are abnormal conditions.",
          "Errors are explicitly caught.",
          "An Error is a subclass of Throwable that indicates serious problems that a reasonable application should not try to catch.",
          "Error and its subclasses are regarded as unchecked exceptions for the purposes of compile-time checking of exceptions."
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Errors are explicitly caught.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 6: Xử lý Ngoại lệ (Exception Handling)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 6: Xử lý Ngoại lệ (Exception Handling)): Chú ý từ khóa trọng tâm 'Errors are explicitly caught.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_119",
        "question": "Which digits, and in what order, will be printed when the following program is run?",
        "code": "public class MyClass {\n    public static void main(String[] args) {\n        int k = 0;\n        try {\n            int i = 5 / k;\n        } catch (ArithmeticException e) {\n            System.out.println(\"1\");\n        } catch (RuntimeException e) {\n            System.out.println(\"2\");\n            return;\n        } catch (Exception e) {\n            System.out.println(\"3\");\n        } finally {\n            System.out.println(\"4\");\n        }\n        System.out.println(\"5\");\n    }\n}",
        "options": [
          "The program will only print 5.",
          "The program will only print 1, 4, and 5, in that order",
          "The program will only print 1 and 4, in that order.",
          "The program will only print 1, 2, and 4, in that order"
        ],
        "correctAnswer": 1,
        "explanation": "1. Phép chia `5 / 0` ném ra ngoại lệ `ArithmeticException` -> Khối `catch (ArithmeticException e)` bắt được và in ra '1'.\n2. Khối `finally` luôn luôn thực thi bất kể có ngoại lệ hay không -> in ra '4'.\n3. Vì ngoại lệ đã được xử lý xong và không có lệnh return trong khối catch đầu tiên, luồng chương trình tiếp tục chạy câu lệnh tiếp theo sau try-finally -> in ra '5'.\n-> Kết quả in ra theo thứ tự là 1, 4, và 5.",
        "tip": "MẸO PHÒNG THI: Catch bắt lỗi chia 0 (in 1) -> Finally luôn chạy (in 4) -> Tiếp tục chạy lệnh cuối (in 5) -> Đáp án: '1, 4, and 5'!"
      },
      {
        "id": "q_120",
        "question": "What will be the result of attempting to compile and run the following program?",
        "code": "public class MyClass {\n    public static void main(String[] args) {\n        RuntimeException re = null;\n        throw re;\n    }\n}",
        "options": [
          "The program will compile without error and will throw java.lang.NullPointerException when run.",
          "The program will fail to compile because it cannot throw re.",
          "The code will fail to compile because the main() method does not declare that it throws RuntimeException in its declaration.",
          "The program will compile without error and will throw java.lang.Runtime- Exception when run."
        ],
        "correctAnswer": 0,
        "explanation": "Trong Java, lệnh `throw re;` biên dịch thành công vì `re` có kiểu là `RuntimeException`. Tuy nhiên khi thực thi tại runtime, biến `re` có giá trị là `null`. Việc ném một đối tượng `null` bằng câu lệnh `throw` sẽ khiến JVM tự động ném ra ngoại lệ `java.lang.NullPointerException`.",
        "tip": "MẸO PHÒNG THI: Thấy `throw null` hoặc `throw re` với `re = null` -> Luôn luôn gây ra `java.lang.NullPointerException` khi chạy!"
      }
    ]
  },
  {
    "id": "java_mod_7",
    "title": "Module 7: Đa luồng (Multithreaded Programming)",
    "description": "Thread lifecycle, Runnable, Callable, đồng bộ hóa Synchronization, wait/notify và Deadlock.",
    "category": "Theo Module",
    "badge": "Concurrency",
    "icon": "⚡",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_121",
        "question": "What is multithreaded programming?",
        "code": "",
        "options": [
          "It’s a process in which a single process is running at a time.",
          "It’s a process in which two or more different processes run simultaneously.",
          "It’s a process in which two or more parts of same process run simultaneously.",
          "It’s a process in which many different processes are able to access same information."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"It’s a process in which two or more parts of same process run simultaneously.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'It’s a process in which two or more parts of same process run simultaneously.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_122",
        "question": "Which of the following method is used to mark the current thread as daemon thread?",
        "code": "",
        "options": [
          "public boolean isDaemon()",
          "public void setDaemon(int status)",
          "public void setDaemon(boolean status)",
          "public void makeDaemon()"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"public void setDaemon(boolean status)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'public void setDaemon(boolean status)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_123",
        "question": "Which of the following is/are types of thread in java?",
        "code": "",
        "options": [
          "User Thread.",
          "None of the above.",
          "Daemon Thread.",
          "Both 1 and 2."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Both 1 and 2.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Both 1 and 2.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_124",
        "question": "Which of the following is method of “java.util.Timer” class schedules the specified task for execution at the specified time?",
        "code": "",
        "options": [
          "void scheduleAtFixedRate(TimerTask task, long delay, long period)",
          "int purge()",
          "void scheduleAtFixedRate(TimerTask task, Date firstTime, long period)",
          "void schedule(TimerTask task, Date time)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"void schedule(TimerTask task, Date time)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'void schedule(TimerTask task, Date time)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_125",
        "question": "Synchronized blocks in Java are marked with the ________ keyword.",
        "code": "",
        "options": [
          "Synchronized",
          "Synchronization",
          "Synchronize.",
          "Shared"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Synchronized\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Synchronized'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_126",
        "question": "Which of the following statement(s) is/are correct regarding Synchronized keyword?",
        "code": "",
        "options": [
          "Synchronized keyword can be used with Instance Methods.",
          "Synchronized keyword can be used with Static Methods.",
          "Synchronized keyword can be used with Code blocks inside Static Methods.",
          "All of the above."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_127",
        "question": "Which of the following method cannot cause a thread to go into a blocked state?",
        "code": "",
        "options": [
          "wait()",
          "yield()",
          "sleep()",
          "suspend()"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `synchronized` trong Java được dùng để đồng bộ hóa phương thức hoặc khối lệnh, ngăn chặn hiện tượng Race Condition bằng cách chỉ cho phép một luồng duy nhất chiếm giữ monitor lock tại một thời điểm.",
        "tip": "MẸO PHÒNG THI: Ngăn chặn xung đột dữ liệu đa luồng -> Dùng 'synchronized'!"
      },
      {
        "id": "q_128",
        "question": "Which of the following class or interface defines wait(), notify(),and notifyAll() methods?",
        "code": "",
        "options": [
          "Thread.",
          "Class",
          "Object.",
          "Runnable."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Object.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Object.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_129",
        "question": "The default priority of a method is _________.",
        "code": "",
        "options": [
          "5",
          "1",
          "0",
          "10"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"5\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm '5'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_130",
        "question": "____________ Method used to get the priority of a thread.",
        "code": "",
        "options": [
          "setPriority()",
          "prority()",
          "getPriority()",
          "threadPriority()"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"getPriority()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'getPriority()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_131",
        "question": "In Deadlock ______________________.",
        "code": "",
        "options": [
          "Two or more threads have circular dependency on an object.",
          "Two or more threads are waiting for a resource.",
          "Two or more threads are trying to access a same object.",
          "None of the Above."
        ],
        "correctAnswer": 0,
        "explanation": "Từ khóa `synchronized` trong Java được dùng để đồng bộ hóa phương thức hoặc khối lệnh, ngăn chặn hiện tượng Race Condition bằng cách chỉ cho phép một luồng duy nhất chiếm giữ monitor lock tại một thời điểm.",
        "tip": "MẸO PHÒNG THI: Ngăn chặn xung đột dữ liệu đa luồng -> Dùng 'synchronized'!"
      },
      {
        "id": "q_132",
        "question": "Which of the following way(s) is/are used to create a thread in Java?",
        "code": "",
        "options": [
          "Both of A and B.",
          "Extending the thread class.",
          "None of the above.",
          "Implementing Runnable interface."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Both of A and B.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Both of A and B.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_133",
        "question": "Which of the following Exception can be throw by “sleep()” method?",
        "code": "",
        "options": [
          "InterruptedException.",
          "NullPointerException.",
          "ThreadException.",
          "IOException"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"InterruptedException.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'InterruptedException.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_134",
        "question": "Which of the Package is used during the implementation of multithreading in Java?",
        "code": "",
        "options": [
          "Java.awt",
          "Java.applet",
          "Java.Lang",
          "Java.io"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Java.Lang\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Java.Lang'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_135",
        "question": "Which of the following is not a valid constructor for Thread class?",
        "code": "",
        "options": [
          "Thread(ThreadGroup group, String name)",
          "Thread()",
          "Thread(Runnable , ThreadGroup )",
          "Thread(ThreadGroup group, Runnable target)"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Thread(Runnable , ThreadGroup )\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'Thread(Runnable , ThreadGroup )'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_136",
        "question": "Which of the following method is use to start the thread Execution?",
        "code": "",
        "options": [
          "resume();",
          "init();",
          "start();",
          "run();"
        ],
        "correctAnswer": 2,
        "explanation": "Để khởi chạy một luồng mới chạy độc lập song song trên CPU, BẮT BUỘC phải gọi phương thức `start()`. Phương thức này yêu cầu JVM cấp phát tài nguyên hệ điều hành và sau đó JVM sẽ tự động gọi phương thức `run()` của luồng.",
        "tip": "MẸO PHÒNG THI: Muốn kích hoạt luồng chạy đa luồng -> Gọi 'start()'. Gọi 'run()' chỉ là gọi hàm thông thường tuần tự!"
      },
      {
        "id": "q_137",
        "question": "Which of the following method must be defined by a class implementing the java.lang.Runnable interface?",
        "code": "",
        "options": [
          "public void run()",
          "void run()",
          "void run(int priority)",
          "public void start()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"public void run()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'public void run()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_138",
        "question": "Which of the following method returns a reference to the currently executing thread object?",
        "code": "",
        "options": [
          "void run()",
          "static Thread currentThread()",
          "void resume()",
          "void start()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"static Thread currentThread()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'static Thread currentThread()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_139",
        "question": "Which of the following method can be used to make the main thread to be executed last among all the threads?",
        "code": "",
        "options": [
          "stop()",
          "join()",
          "Interrupted()",
          "sleep()"
        ],
        "correctAnswer": 3,
        "explanation": "Khác biệt cốt lõi: `Thread.sleep()` tạm dừng luồng hiện tại nhưng KHÔNG giải phóng khóa (monitor lock); trong khi `Object.wait()` tạm dừng luồng và GIẢI PHÓNG khóa để các luồng khác có thể vào khối synchronized.",
        "tip": "MẸO PHÒNG THI: sleep() giữ khóa (thuộc Thread); wait() nhả khóa (thuộc Object)!"
      },
      {
        "id": "q_140",
        "question": "Which of the following statement(s) regarding ThreadGroup class is/are correct?",
        "code": "",
        "options": [
          "Thread groups provide a mechanism for collecting multiple threads into a single object of type.",
          "ThreadGroup(ThreadGroup parent, String name) constructor can be used to create a new Thread group object.",
          "All of the above.",
          "activeCount() method is used to find the number of active threads in this thread group and its subgroups."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 7: Đa luồng (Multithreaded Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 7: Đa luồng (Multithreaded Programming)): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_8",
    "title": "Module 8: Luồng vào ra dữ liệu (Java I/O)",
    "description": "Byte Streams, Character Streams, File handling, BufferedReader, Scanner và luồng dữ liệu.",
    "category": "Theo Module",
    "badge": "Java I/O",
    "icon": "💾",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_141",
        "question": "Which of the following package contains the classes and interfaces required for doing the Input and Output operations in JAVA?",
        "code": "",
        "options": [
          "java.io.",
          "java.lang",
          "java.awt.",
          "java.util."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"java.io.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'java.io.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_142",
        "question": "Which of the following method of “RandomAccessFile” Attempts to skip over n bytes of input discarding the skipped bytes?",
        "code": "",
        "options": [
          "setLength(long n)",
          "seek(long n)",
          "skipBytes(int n)",
          "write(byte[] n)"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"skipBytes(int n)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'skipBytes(int n)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_143",
        "question": "Which of the following class is used to read streams of characters?",
        "code": "",
        "options": [
          "InputReader",
          "CharacterReader",
          "StreamReader",
          "FileReader"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"FileReader\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'FileReader'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_144",
        "question": "The _________ class is a character stream whose source is a string.",
        "code": "",
        "options": [
          "Java.io.BufferedReader",
          "Java.io.FilterReader",
          "Java.io.StringReader",
          "Java.io.FileReader"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Java.io.StringReader\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'Java.io.StringReader'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_145",
        "question": "Consider the below syntax choose correct among the following options:\npublic class BufferedReader extends _________",
        "code": "",
        "options": [
          "StringReader",
          "Reader",
          "InputStreamReader",
          "Writer"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Reader\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'Reader'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_146",
        "question": "Which of the following class is not related to input and output stream in terms of functioning?",
        "code": "",
        "options": [
          "Reader",
          "Writer",
          "InputStream",
          "File"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"File\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'File'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_147",
        "question": "Which of the following constructor does not belongs to “PipedReader” class?",
        "code": "",
        "options": [
          "PipedReader(PipedWriter src, int pipeSize)",
          "PipedReader(int pipeSize, String name)",
          "PipedReader(PipedWriter src)",
          "PipedReader(int pipeSize)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"PipedReader(int pipeSize, String name)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'PipedReader(int pipeSize, String name)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_148",
        "question": "Which of the following of Reader class is used to read a single character?",
        "code": "",
        "options": [
          "int read()",
          "int readChar()",
          "int read(char[] cbuf)",
          "int getChar()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"int read()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'int read()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_149",
        "question": "Which of the following is not a Stream in JAVA I/O?",
        "code": "",
        "options": [
          "System.inout",
          "System.in",
          "System.err",
          "System.out"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"System.inout\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'System.inout'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_150",
        "question": "Which of the following Constructor does not belongs to “File” class?",
        "code": "",
        "options": [
          "File(String pathname)",
          "File(URI uri)",
          "File(String parent, String child)",
          "File(String parent, URI uri)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"File(String parent, URI uri)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'File(String parent, URI uri)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_151",
        "question": "Which of the following method tests whether the application can execute the file denoted by this abstract pathname?",
        "code": "",
        "options": [
          "boolean canRead()",
          "boolean canWrite()",
          "boolean canExecute()",
          "int compareTo(File pathname)"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"boolean canExecute()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'boolean canExecute()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_152",
        "question": "Which of the following stream contains the classes which can work on character stream?",
        "code": "",
        "options": [
          "Character Stream",
          "All of the above",
          "inputStream",
          "outputStream"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Character Stream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'Character Stream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_153",
        "question": "Which of the following method of a “File” class returns the name of the file or directory denoted by this abstract pathname?",
        "code": "",
        "options": [
          "String getPath()",
          "String getName()",
          "File getParentFile()",
          "String getParent()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"String getName()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'String getName()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_154",
        "question": "_____________ Class is not a sub class of “inputStream” Class.",
        "code": "",
        "options": [
          "FilterInputStream",
          "PrintStream",
          "FileInputStream",
          "ObjectInputStream"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"PrintStream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'PrintStream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_155",
        "question": "Which of the following method of “inputStream” class reads the next byte of data from the input stream?",
        "code": "",
        "options": [
          "read()",
          "mark(int readlimit)",
          "skip(long n)",
          "markSupported()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"read()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'read()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_156",
        "question": "Which of the following method of outputStream class is flushes the output stream and forces any buffered output bytes to be written out?",
        "code": "",
        "options": [
          "close()",
          "flush()",
          "write(byte[] b, int off, int len)",
          "write(byte[] b)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"flush()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'flush()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_157",
        "question": "Which of the following “inputStream” class obtains input bytes from a file in a local file system?",
        "code": "",
        "options": [
          "FileInputStream",
          "FilterInputStream",
          "ObjectInputStream",
          "FileOutputStream"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"FileInputStream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'FileInputStream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_158",
        "question": "Which of the following class provides the ability to buffer the input?",
        "code": "",
        "options": [
          "DataInputStream",
          "FileInputStream",
          "ObjectInputStream",
          "BufferedInputStream"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"BufferedInputStream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'BufferedInputStream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_159",
        "question": "Which of the following method does not belongs to “BufferedOutputStream” class?",
        "code": "",
        "options": [
          "write(byte[] b, int off, int len)",
          "void flush()",
          "void write(int b)",
          "void reset()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"void reset()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'void reset()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_160",
        "question": "Consider the below syntax choose correct among the following options:\npublic class BufferedOutputStream extends _____________",
        "code": "",
        "options": [
          "DataOutputStream",
          "ByteArrayOutputStream",
          "FilterInputStream",
          "FilterOutputStream"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"FilterOutputStream\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 8: Luồng vào ra dữ liệu (Java I/O)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 8: Luồng vào ra dữ liệu (Java I/O)): Chú ý từ khóa trọng tâm 'FilterOutputStream'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_9",
    "title": "Module 9: Immutable Objects, Wrappers & Serialization",
    "description": "String pool, StringBuilder, Wrapper classes, Autoboxing và cơ chế Serialization/Deserialization.",
    "category": "Theo Module",
    "badge": "Core Objects",
    "icon": "🔒",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_161",
        "question": "In JAVA,which of this class is super class of all other classes?",
        "code": "",
        "options": [
          "Process",
          "Object",
          "Math",
          "System"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Object\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Object'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_162",
        "question": "Which of the following are valid terms in java?",
        "code": "",
        "options": [
          "finally",
          "final",
          "All of Above",
          "finalize"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"All of Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'All of Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_163",
        "question": "Which of these is a process of writing the state of an object to a byte stream?",
        "code": "",
        "options": [
          "All of the mentioned",
          "Serialization",
          "File Filtering",
          "DeSerialization"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Serialization\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Serialization'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_164",
        "question": "Which of these interfaces extend DataOutput interface?",
        "code": "",
        "options": [
          "ObjectInput",
          "Externalization",
          "ObjectOutput",
          "Serializable"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"ObjectOutput\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'ObjectOutput'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_165",
        "question": "Which of these is a method of ObjectOutput interface used to finalize the output state so that any buffers are cleared?",
        "code": "",
        "options": [
          "fflush()",
          "flush()",
          "clear()",
          "close()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"flush()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'flush()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_166",
        "question": "Which of the following gives the difference between StringBuilder and StringBuffer?",
        "code": "",
        "options": [
          "None Of above",
          "Both are Same, There is no difference.",
          "StringBuffer is synchronized and StringBuilder is not synchronized.",
          "StringBuffer is mutable and StringBuilder is not."
        ],
        "correctAnswer": 2,
        "explanation": "Khác biệt cốt lõi giữa StringBuffer và StringBuilder: `StringBuffer` là an toàn đa luồng (thread-safe) vì các phương thức đều được đánh dấu `synchronized`, dẫn đến tốc độ chậm hơn; `StringBuilder` KHÔNG có `synchronized` nên không thread-safe nhưng có tốc độ xử lý chuỗi nhanh hơn trong môi trường đơn luồng.",
        "tip": "MẸO PHÒNG THI: StringBuffer = Synchronized (Thread-safe); StringBuilder = Not synchronized (Nhanh hơn)!"
      },
      {
        "id": "q_167",
        "question": "Which of these is a process of extracting/removing the state of an object from a stream?",
        "code": "",
        "options": [
          "Deserialization",
          "None of above",
          "Serialization",
          "Externalization"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Deserialization\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Deserialization'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_168",
        "question": "Which of this process occur automatically by java run time system?",
        "code": "",
        "options": [
          "Memory allocation",
          "Serialization",
          "Deserialization",
          "All of the mentioned"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the mentioned\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'All of the mentioned'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_169",
        "question": "Which of following is correct package for Serializable interface in java?",
        "code": "",
        "options": [
          "Java.io",
          "Java.util",
          "Java.dotnet",
          "Java.lang"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Java.io\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Java.io'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_170",
        "question": "Which Java keyword is used to marks a member variable not to be serialized?",
        "code": "",
        "options": [
          "static",
          "transient",
          "final",
          "None of above"
        ],
        "correctAnswer": 1,
        "explanation": "Từ khóa `transient` trong Java được dùng để đánh dấu một biến thành viên (member variable) KHÔNG bị tuần tự hóa (serialization). Khi đối tượng được chuyển đổi thành luồng byte bằng `ObjectOutputStream` để ghi vào file hoặc truyền qua mạng, các trường `transient` sẽ bị bỏ qua và không được lưu lại; khi đọc lại (`ObjectInputStream`), biến sẽ nhận giá trị mặc định của kiểu dữ liệu (vd: `null`, `0`, `false`).",
        "tip": "MẸO PHÒNG THI: Thấy cụm từ 'not to be serialized' hoặc 'prevent serialization' -> Chọn ngay 'transient'! (Mẹo nhớ: 'transient' = tạm thời, chóng qua -> không lưu vĩnh viễn vào file)."
      },
      {
        "id": "q_171",
        "question": "Which of the following is serialization exception?",
        "code": "",
        "options": [
          "All of above",
          "NotSerializableException",
          "IOException",
          "InvalidClassException"
        ],
        "correctAnswer": 0,
        "explanation": "Các ngoại lệ liên quan đến Serialization trong Java đều kế thừa từ `ObjectStreamException` thuộc `java.io`, bao gồm: `NotSerializableException`, `InvalidClassException`, `WriteAbortedException`... Do đó đáp án là All of above.",
        "tip": "MẸO PHÒNG THI: Các câu hỏi trắc nghiệm liệt kê các Serialization Exceptions thường đáp án đúng là 'All of above'!"
      },
      {
        "id": "q_172",
        "question": "Which of this method of Object class can generate duplicate copy of the object on which it is called?",
        "code": "",
        "options": [
          "copy()",
          "clone()",
          "dublicate()",
          "dito()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"clone()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'clone()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_173",
        "question": "Which of the following is deserialization exception?",
        "code": "",
        "options": [
          "All of above.",
          "OptionalDataException",
          "InvalidClassException",
          "StreamCorruptedException"
        ],
        "correctAnswer": 0,
        "explanation": "Các ngoại lệ liên quan đến Serialization trong Java đều kế thừa từ `ObjectStreamException` thuộc `java.io`, bao gồm: `NotSerializableException`, `InvalidClassException`, `WriteAbortedException`... Do đó đáp án là All of above..",
        "tip": "MẸO PHÒNG THI: Các câu hỏi trắc nghiệm liệt kê các Serialization Exceptions thường đáp án đúng là 'All of above'!"
      },
      {
        "id": "q_174",
        "question": "Which of the following is true about immutable objects?",
        "code": "",
        "options": [
          "Instead of modify, it creates a new copy and keeps the original same",
          "An Object can be modified.",
          "An object that cannot be modified.",
          "Both 1 and 2."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Both 1 and 2.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Both 1 and 2.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_175",
        "question": "Which of the following wrapper classes are immutable?",
        "code": "",
        "options": [
          "Long",
          "Integer",
          "All of above.",
          "Character"
        ],
        "correctAnswer": 2,
        "explanation": "Trong Java, tất cả các lớp bao bọc nguyên thủy (Wrapper classes) như `Integer`, `Double`, `Float`, `Long`, `Boolean`, `Character`, `Byte`, `Short` và cả `String` đều là các đối tượng BẤT BIẾN (Immutable).",
        "tip": "MẸO PHÒNG THI: Tất cả các Wrapper class trong Java (Integer, Float, Double...) đều là IMMUTABLE!"
      },
      {
        "id": "q_176",
        "question": "Which of this method of String class is used to obtain character at specified index?",
        "code": "",
        "options": [
          "charAt()",
          "charat()",
          "Charat()",
          "char()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"charAt()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'charAt()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_177",
        "question": "Which of this method of String class can be used to test two strings for equality?",
        "code": "",
        "options": [
          "equal()",
          "isequals()",
          "isequal()",
          "equals()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"equals()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'equals()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_178",
        "question": "Which of the following statements are incorrect?",
        "code": "",
        "options": [
          "String is a class.",
          "Java defines a peer class of String, called StringBuffer, which allows string to be altered.",
          "Strings in java are mutable.",
          "Every string is an object of class String."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Strings in java are mutable.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'Strings in java are mutable.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_179",
        "question": "What is the output of this program?",
        "code": "class string_class {\n    public static void main(String args[]) {\n        String obj = \"I LIKE JAVA\";\n        System.out.println(obj.length());\n    }\n}",
        "options": [
          "10",
          "9",
          "12",
          "11"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"11\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm '11'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_180",
        "question": "What is the output of this program?",
        "code": "class string_class {\n    public static void main(String args[]) {\n        String obj = \"hello\";\n        String obj1 = \"world\";\n        String obj2 = \"hello\";\n        System.out.println(obj.equals(obj1) + \" \" + obj.equals(obj2));\n    }\n}",
        "options": [
          "false true",
          "true false",
          "true true",
          "false false"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"false true\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 9: Immutable Objects, Wrappers & Serialization'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 9: Immutable Objects, Wrappers & Serialization): Chú ý từ khóa trọng tâm 'false true'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_10",
    "title": "Module 10: Cơ sở dữ liệu với JDBC",
    "description": "Kết nối CSDL, DriverManager, Connection, Statement, PreparedStatement, CallableStatement và ResultSet.",
    "category": "Theo Module",
    "badge": "Database",
    "icon": "🗄️",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_181",
        "question": "What is JDBC?",
        "code": "",
        "options": [
          "Java Compiler",
          "Java API",
          "Java Interpreter",
          "None of the Above"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Java API\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Java API'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_182",
        "question": "Which of the following is the Statement Interface method?",
        "code": "",
        "options": [
          "execute()",
          "All of the Above",
          "executeQuery()",
          "executeUpdate()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_183",
        "question": "Which method is used to perform DML statements in JDBC?",
        "code": "",
        "options": [
          "execute()",
          "executeQuery()",
          "executeUpdate()",
          "None of the Above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"executeUpdate()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'executeUpdate()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_184",
        "question": "Which of the following is the type of the ResultSet?",
        "code": "",
        "options": [
          "All of the Above.",
          "ResultSet.TYPE_FORWARD_ONLY.",
          "ResultSet.TYPE_SCROLL_INSENSITIVE.",
          "ResultSet.TYPE_SCROLL_SENSITIVE."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the Above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_185",
        "question": "Which of the following method is in the category of ResultSet Interface?",
        "code": "",
        "options": [
          "Navigational Methods.",
          "All of the Above",
          "Update Methods",
          "Get Methods"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_186",
        "question": "What happens if you call the method close() on a ResultSet object?",
        "code": "",
        "options": [
          "The method close() does not exist for a ResultSet. Only Connections can be closed.",
          "None of the Above.",
          "You will get a SQLException, because only Statement objects can close ResultSet.",
          "The ResultSetObject and JDBC resources are released."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"The ResultSetObject and JDBC resources are released.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'The ResultSetObject and JDBC resources are released.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_187",
        "question": "Which method is used to move the ResultSet cursor to the next Row?",
        "code": "",
        "options": [
          "afterLast()",
          "next()",
          "beforeFirst()",
          "previous()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"next()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'next()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_188",
        "question": "Which type of Statement can execute parameterized queries?",
        "code": "",
        "options": [
          "PreparedStatement.",
          "None of the Above",
          "ParameterizedStatement",
          "Statement."
        ],
        "correctAnswer": 0,
        "explanation": "Giao diện `PreparedStatement` dùng cho các câu lệnh SQL có tham số đánh dấu `?`. Câu lệnh được cơ sở dữ liệu tiền biên dịch (precompiled), giúp tăng tốc độ thực thi khi gọi nhiều lần và chống tấn công SQL Injection.",
        "tip": "MẸO PHÒNG THI: SQL có tham số '?' hoặc tiền biên dịch (precompiled) -> Luôn chọn 'PreparedStatement'!"
      },
      {
        "id": "q_189",
        "question": "JDBC facilitates to store the java objects by using which of the following methods of PreparedStatement?",
        "code": "",
        "options": [
          "setClob(int parameterIndex, Clob x).",
          "All of the Above",
          "setObject(int parameterIndex,Object x)",
          "setBlob(int parameterIndex,Blob x)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_190",
        "question": "The Class java.sql.TimeStamp has its superclass as_______",
        "code": "",
        "options": [
          "java.util.Date;",
          "java.sql.Time;",
          "java.sql.Date;",
          "None of the Above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"java.util.Date;\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'java.util.Date;'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_191",
        "question": "Which of the following method is used to create a CallableStatement object?",
        "code": "",
        "options": [
          "createStatement()",
          "prepareStatement()",
          "None of the Above",
          "prepareCall()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"prepareCall()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'prepareCall()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_192",
        "question": "Which packages contain the JDBC classes?",
        "code": "",
        "options": [
          "java.rmi.",
          "java.sql.",
          "java.net",
          "java.awt"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"java.sql.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'java.sql.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_193",
        "question": "Which of the following allows dirty read in JDBC Connection?",
        "code": "",
        "options": [
          "TRANSACTION_READ_UNCOMMITTED",
          "TRANSACTION_SERIALIZABLE",
          "TRANSACTION_READ_COMMITTED",
          "TRANSACTION_REPEATABLE_READ"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"TRANSACTION_READ_UNCOMMITTED\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'TRANSACTION_READ_UNCOMMITTED'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_194",
        "question": "How many types of JDBC drivers are present?",
        "code": "",
        "options": [
          "Three",
          "One",
          "Four",
          "Two"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Four\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Four'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_195",
        "question": "Which type of driver provides JDBC access via one or more ODBC drivers?",
        "code": "",
        "options": [
          "Type 1 driver",
          "Type 4 driver",
          "Type 2 driver",
          "Type 3 driver"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Type 1 driver\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Type 1 driver'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_196",
        "question": "Which type of driver converts JDBC calls into the network protocol used by the database management system directly?",
        "code": "",
        "options": [
          "Type 2 driver",
          "Type 4 driver",
          "Type 1 driver",
          "Type 3 driver"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Type 4 driver\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Type 4 driver'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_197",
        "question": "What is the disadvantage of Type-4 Native-Protocol Driver?",
        "code": "",
        "options": [
          "The driver converts JDBC calls into vendor-specific database protocol",
          "No Software is required at both client & server side.",
          "At client side, a separate driver is needed for each database",
          "Type-4 driver is entirely written in Java"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"At client side, a separate driver is needed for each database\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'At client side, a separate driver is needed for each database'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_198",
        "question": "Which of the following methods is needed for loading a database driver in JDBC?",
        "code": "",
        "options": [
          "Class.forName()",
          "DriverManager.getConnection()",
          "Both 1 & 2",
          "DriverManager.registerDriver() Method"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Both 1 & 2\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'Both 1 & 2'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_199",
        "question": "Which method is used to create a connection with database?",
        "code": "",
        "options": [
          "getConnection()",
          "getDriver()",
          "deregisterDriver()",
          "registerDriver()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"getConnection()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'getConnection()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_200",
        "question": "Which one of the following are the different types of statements in JDBC API?",
        "code": "",
        "options": [
          "Prepare Statement",
          "Callable Statement",
          "Statement",
          "All of the Above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the Above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 10: Cơ sở dữ liệu với JDBC'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 10: Cơ sở dữ liệu với JDBC): Chú ý từ khóa trọng tâm 'All of the Above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_11",
    "title": "Module 11: Giao diện GUI với AWT & Applet",
    "description": "Các thành phần AWT Components, Layout Managers, Xử lý sự kiện Event Handling và vòng đời Applet.",
    "category": "Theo Module",
    "badge": "AWT & GUI",
    "icon": "🖼️",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_201",
        "question": "What is the full form of AWT?",
        "code": "",
        "options": [
          "Abstract Window Tool",
          "Automated Window Tool",
          "Automated Window Toolkit",
          "Abstract Window Toolkit"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Abstract Window Toolkit\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Abstract Window Toolkit'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_202",
        "question": "_________ is the default layout manager used for all Panels?",
        "code": "",
        "options": [
          "FlowLayout",
          "GridLayout",
          "CardLayout",
          "BorderLayout"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"FlowLayout\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'FlowLayout'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_203",
        "question": "At most how many components can be added if we are using a border layout in our applet?",
        "code": "",
        "options": [
          "Two components",
          "Four components",
          "Five components",
          "Three components"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Five components\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Five components'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_204",
        "question": "___________ is the most sophisticated, flexible layout manager in which we can have cell rows of different heights and columns of different widths?",
        "code": "",
        "options": [
          "BorderLayout",
          "GridBagLayout",
          "FlowLayout",
          "GridLayout"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"GridBagLayout\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'GridBagLayout'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_205",
        "question": "To associate an action with a component, we must attach a/an _______ to it?",
        "code": "",
        "options": [
          "listener",
          "container",
          "event",
          "button"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"listener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'listener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_206",
        "question": "Which of the following interface should we implement in order to attach a listener with a component?",
        "code": "",
        "options": [
          "AWTEventMulticaster",
          "Action",
          "EventListener",
          "ActionListener"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"ActionListener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'ActionListener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_207",
        "question": "Which method we must override while implementing ActionListener class to attach a listener to a component?",
        "code": "",
        "options": [
          "addActionListener",
          "actionEvent",
          "actionPerformed",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"actionPerformed\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'actionPerformed'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_208",
        "question": "_________ Classes are very useful when you want to process only few of the events that are handled by a particular event listener interface?",
        "code": "",
        "options": [
          "EventListener",
          "Adapter",
          "ActionListener",
          "Action"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Adapter\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Adapter'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_209",
        "question": "Which of the following statement is not true regarding difference between AWT and SWING?",
        "code": "",
        "options": [
          "AWT components are heavyweight components while Swing components are lightweight.",
          "AWT components are lightweight components while Swing components are heavyweight.",
          "Swing and AWT are incompatible you can use either, but you can’t mix them.",
          "AWT components require java.awt package while Swing components require javax.swing package."
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"AWT components are lightweight components while Swing components are heavyweight.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'AWT components are lightweight components while Swing components are heavyweight.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_210",
        "question": "_______ listener interface is used for receiving keyboard events (keystrokes)?",
        "code": "",
        "options": [
          "ActionListener",
          "KeyListener",
          "EventListener",
          "TextListener"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"KeyListener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'KeyListener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_211",
        "question": "Which of the following Exception class is used when an Absract Window Toolkit exception has occurred?",
        "code": "",
        "options": [
          "HeadlessException",
          "FontFormat Exception",
          "AWTException",
          "None of the above."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"AWTException\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'AWTException'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_212",
        "question": "Choose the correct order from the following to build the GUI using AWT?a) Make a frame or an applet to display things.b) Create your components.c) Attach listener to your components.d) Add your components.e) Arrange or layout your components.",
        "code": "",
        "options": [
          "a, b, e, d, c",
          "a, b, e, c, d",
          "a, b, d, e, c",
          "a, b, c, d, e"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"a, b, d, e, c\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'a, b, d, e, c'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_213",
        "question": "________ container class provides space in which an application can attach any other component like button,ComboBox, etc?",
        "code": "",
        "options": [
          "ScrollPane",
          "None of the above",
          "Panel",
          "Window"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Panel\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Panel'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_214",
        "question": "Which of the following is not a subclass of Component class?",
        "code": "",
        "options": [
          "Checkbox",
          "Label",
          "Button",
          "Panel"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Panel\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Panel'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_215",
        "question": "Which of the following is not a subclass of Container class?",
        "code": "",
        "options": [
          "Window",
          "Label",
          "Panel",
          "ScrollPane"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Label\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'Label'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_216",
        "question": "The Applet class is in ........ package?",
        "code": "",
        "options": [
          "java.applet",
          "java.awt",
          "java.util",
          "java.io"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"java.applet\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'java.applet'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_217",
        "question": "To run an applet, which of the following command is used?",
        "code": "",
        "options": [
          "javac",
          "applet",
          "java",
          "appletviewer"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"appletviewer\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'appletviewer'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_218",
        "question": "Which of the following method is called first by an applet?",
        "code": "",
        "options": [
          "start()",
          "destroy()",
          "paint()",
          "init()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"init()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'init()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_219",
        "question": "To display text on the applet __________ method is used?",
        "code": "",
        "options": [
          "drawString()",
          "drawLine",
          "showString()",
          "println()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"drawString()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'drawString()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_220",
        "question": "Which of the following is/are type of layout manager used in every containers?",
        "code": "",
        "options": [
          "CardLayout",
          "BorderLayout",
          "GridLayout",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 11: Giao diện GUI với AWT & Applet'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 11: Giao diện GUI với AWT & Applet): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_12",
    "title": "Module 12: Giao diện đồ họa nâng cao Java Swing",
    "description": "JFrame, JPanel, JButton, JTable, MVC pattern trong Swing và cơ chế Event Dispatch Thread (EDT).",
    "category": "Theo Module",
    "badge": "Swing GUI",
    "icon": "🎨",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_221",
        "question": "Swing is a part of _________.",
        "code": "",
        "options": [
          "JAXP",
          "JFC",
          "JDBC",
          "JMX"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"JFC\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JFC'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_222",
        "question": "Out of the following which is not a top level container in swing?",
        "code": "",
        "options": [
          "Applet",
          "InternalFrame",
          "Dialog",
          "Frame"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"InternalFrame\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'InternalFrame'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_223",
        "question": "Which of the following class is not inherited from JComponent class?",
        "code": "",
        "options": [
          "JButton",
          "JFrame",
          "JLable",
          "JTable"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"JFrame\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JFrame'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_224",
        "question": "Which event listener you will use to listen for changes in the component’s size, position or visibility?",
        "code": "",
        "options": [
          "Focus Listener",
          "Component Listener",
          "Key Listener",
          "Mouse Listener"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Component Listener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'Component Listener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_225",
        "question": "Which class will be used to display hierarchical data?",
        "code": "",
        "options": [
          "JLabel",
          "JTree",
          "JDialog",
          "JComponent"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"JTree\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JTree'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_226",
        "question": "Which pane acts as a sheet of glass over all the other components?",
        "code": "",
        "options": [
          "GlassPane",
          "ContentPane",
          "EditorPane",
          "LayeredPane"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"GlassPane\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'GlassPane'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_227",
        "question": "Which method do you use to add a menu bar to a top-level container such as a JFrame?",
        "code": "",
        "options": [
          "setSelected",
          "setComponet",
          "setLayout",
          "setJMenuBar"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"setJMenuBar\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'setJMenuBar'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_228",
        "question": "Which is the default layout manager for a panel?",
        "code": "",
        "options": [
          "GridLayout",
          "BoxLayout",
          "BorderLayout",
          "FlowLayout"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"FlowLayout\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'FlowLayout'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_229",
        "question": "To set a tool tip for any JComponent which is the correct syntax in Java Swing?",
        "code": "",
        "options": [
          "b1.ToolTipText(\"Click this button to disable the middle button.\");",
          "b1.setToolTipText(\"Click this button to disable the middle button.\");",
          "b1.setToolText(\"Click this button to disable the middle button.\");",
          "b1.setToolTip(\"Click this button to disable the middle button.\");"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"b1.setToolTipText(\"Click this button to disable the middle button.\");\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'b1.setToolTipText(\"Click this button to disable the middle button.\");'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_230",
        "question": "Which Swing components use ListSelectionModel to manage selection state?",
        "code": "",
        "options": [
          "Both 1 and 2",
          "JTable",
          "JList",
          "JMenu"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Both 1 and 2\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'Both 1 and 2'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_231",
        "question": "Which event you will use to assist in the implementation of undo and redo commands?",
        "code": "",
        "options": [
          "Undoable edit events",
          "Action event",
          "Key event",
          "Mouse event"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Undoable edit events\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'Undoable edit events'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_232",
        "question": "In JAVA , what is lightweight component?",
        "code": "",
        "options": [
          "A component that lets the user pick a color.",
          "A component that displays an icon, but that doesn't react to user clicks.",
          "A component that is associated with its own native screen resource.",
          "A component has no native screen resource of its own."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"A component has no native screen resource of its own.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'A component has no native screen resource of its own.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_233",
        "question": "Which listener interface will be used to detect typing events at the keyboard?",
        "code": "",
        "options": [
          "Key Listener",
          "Change Listener",
          "Property Change Listener",
          "Component Listener"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Key Listener\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'Key Listener'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_234",
        "question": "Which method is used to specify a container’s layout?",
        "code": "",
        "options": [
          "setLayoutContainer()",
          "setLayout()",
          "setComponentLayout()",
          "setContainerLayout()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"setLayout()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'setLayout()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_235",
        "question": "The following code will set the 'button' at which position in BorderLayout?",
        "code": "// Container pane = aFrame.getContentPane();\nJButton button = new JButton(\"Button 1 (LINE_START)\");\npane.add(button, BorderLayout.LINE_START);",
        "options": [
          "North",
          "West",
          "East",
          "South"
        ],
        "correctAnswer": 1,
        "explanation": "Trong bố cục `BorderLayout` của Java Swing/AWT, `BorderLayout.LINE_START` tương ứng với vị trí `BorderLayout.WEST` (bên trái theo hướng đọc từ trái sang phải mặc định).",
        "tip": "MẸO PHÒNG THI: Trong BorderLayout: `LINE_START` = `WEST` (Tây/Trái), `LINE_END` = `EAST` (Đông/Phải), `PAGE_START` = `NORTH`, `PAGE_END` = `SOUTH`!"
      },
      {
        "id": "q_236",
        "question": "Text components use an EditorKit to tie the various pieces of the text component together. The Swing text package provides which of the following editor kits?",
        "code": "",
        "options": [
          "StyledEditorKit",
          "All of the above",
          "DefaultEditorKit",
          "HTMLEditorKit"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_237",
        "question": "The immediate superclass of JCheckBox class is _________________ .",
        "code": "",
        "options": [
          "JToggleButton",
          "JButton",
          "AbstractButton",
          "JComponent"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"JToggleButton\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JToggleButton'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_238",
        "question": "To choose one of the options from a drop-down list which of the following components can be used in Java Swing?",
        "code": "",
        "options": [
          "JList",
          "JCheckBoxMenuItem",
          "JComboBox",
          "JMenu"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"JComboBox\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JComboBox'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_239",
        "question": "Which of the following pane provide a scrollable view of the component?",
        "code": "",
        "options": [
          "JSplitPane",
          "JTabbedPane",
          "JRootPane",
          "JScrollPane"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"JScrollPane\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JScrollPane'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_240",
        "question": "Which is the most suitable class, to create a container (in java swing) to display an error message or warning to a user?",
        "code": "",
        "options": [
          "JApplet",
          "JFrame",
          "JDialog",
          "JInternalFrame"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"JDialog\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 12: Giao diện đồ họa nâng cao Java Swing'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 12: Giao diện đồ họa nâng cao Java Swing): Chú ý từ khóa trọng tâm 'JDialog'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_13",
    "title": "Module 13: Lập trình Mạng (Network Programming)",
    "description": "Giao thức TCP/UDP, Socket, ServerSocket, URLConnection, DatagramPacket và lập trình Client-Server.",
    "category": "Theo Module",
    "badge": "Networking",
    "icon": "🌐",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_241",
        "question": "Java Socket Consist of _____________?",
        "code": "",
        "options": [
          "None of the above",
          "IP address",
          "port number",
          "Both IP address and port number"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Both IP address and port number\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'Both IP address and port number'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_242",
        "question": "Which of following methods are defines in URLConnection class?",
        "code": "",
        "options": [
          "String getContentType( )",
          "All of the above",
          "long getDate( )",
          "int getContentLength( )"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_243",
        "question": "Which method is Waits for an incoming client and blocks until either a client connects to the server on specific port or the socket times out?",
        "code": "",
        "options": [
          "public Socket accept() throws IOException",
          "public void setSoTimeout(int timeout)",
          "public void bind(SocketAddress host, int backlog)",
          "public int getLocalPort()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"public Socket accept() throws IOException\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'public Socket accept() throws IOException'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_244",
        "question": "Which method Returns the port that the server socket is listening on?",
        "code": "",
        "options": [
          "public int getLocalPort()",
          "public void setSoTimeout(int timeout)",
          "public void bind(SocketAddress host, int backlog)",
          "public Socket accept() throws IOException"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"public int getLocalPort()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'public int getLocalPort()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_245",
        "question": "Which of the following are constructors for ServerSocket class?",
        "code": "",
        "options": [
          "public ServerSocket(int port) throws IOException",
          "public ServerSocket(int port, int backlog) throws IOException",
          "All of the above",
          "public ServerSocket(int port, int backlog, InetAddress address) throws IOException"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_246",
        "question": "Which method Sets the time-out value for how long the server socket waits for a client during the accept()?",
        "code": "",
        "options": [
          "public int getLocalPort()",
          "public void setSoTimeout(int timeout)",
          "public Socket accept() throws IOException",
          "public void bind(SocketAddress host, int backlog)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"public void setSoTimeout(int timeout)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'public void setSoTimeout(int timeout)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_247",
        "question": "Which method binds the socket to the specified server and port in the SocketAddress object?",
        "code": "",
        "options": [
          "public void bind(SocketAddress host, int backlog)",
          "public Socket accept() throws IOException",
          "public int getLocalPort()",
          "public void setSoTimeout(int timeout)"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"public void bind(SocketAddress host, int backlog)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'public void bind(SocketAddress host, int backlog)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_248",
        "question": "Which method returns an InetAddress object given the raw IP address?",
        "code": "",
        "options": [
          "String toString()",
          "String getHostAddress()",
          "String getHostName()",
          "static InetAddress getByAddress(byte[] addr)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"static InetAddress getByAddress(byte[] addr)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'static InetAddress getByAddress(byte[] addr)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_249",
        "question": "Which class represents a socket for sending and receiving datagram packets?",
        "code": "",
        "options": [
          "HttpURLPermission",
          "DatagramSocket",
          "HttpCookie",
          "HttpURLConnection"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"DatagramSocket\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'DatagramSocket'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_250",
        "question": "Which exception thrown to indicate that the IP address of a host could not be determined.",
        "code": "",
        "options": [
          "URISyntaxException",
          "SocketTimeoutException",
          "UnknownHostException",
          "UnknownServiceException"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"UnknownHostException\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'UnknownHostException'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_251",
        "question": "_________________class implements client sockets.",
        "code": "",
        "options": [
          "SocketImpl",
          "ServerSocket",
          "SocketAddress",
          "Socket"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Socket\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'Socket'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_252",
        "question": "What is the difference between TCP and UDP?",
        "code": "",
        "options": [
          "All of the above",
          "communication of UDP is not reliable as compared to TCP",
          "TCP is connection-oriented protocol and UDP is connectionless protocol.",
          "TCP reads data as stream and UDP reads data as Datagram’s of packet"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_253",
        "question": "________________ Represents a Uniform Resource Identifier reference.",
        "code": "",
        "options": [
          "URLClassLoader",
          "URLConnection",
          "URL",
          "URI"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"URI\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'URI'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_254",
        "question": "What are advantages of Java Sockets?",
        "code": "",
        "options": [
          "All of the above",
          "Sockets cause low network traffic.",
          "Efficient socket based programming can be easily implemented for general communications.",
          "Sockets are flexible and sufficient."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_255",
        "question": "Which class is used by server applications to obtain a port and listen for client requests?",
        "code": "",
        "options": [
          "java.net.ServerSocket class",
          "java.net.Authenticator",
          "java.net.SocketAddress",
          "java.net.Socket"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"java.net.ServerSocket class\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'java.net.ServerSocket class'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_256",
        "question": "The package _______ contains classes and interfaces that provide a powerful infrastructure for networking in Java.",
        "code": "",
        "options": [
          "java.applet",
          "java.awt",
          "java.rmi",
          "java.net"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"java.net\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'java.net'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_257",
        "question": "__________is a connection-oriented protocol.",
        "code": "",
        "options": [
          "None of the above",
          "Transmission Control Protocol(TCP)",
          "User Datagram Protocol (UDP)",
          "Internet Protocol (IP)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Transmission Control Protocol(TCP)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'Transmission Control Protocol(TCP)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_258",
        "question": "Which of the following are classes of java.net package?",
        "code": "",
        "options": [
          "All of the above.",
          "Authenticator",
          "DatagramSocket",
          "Socket"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_259",
        "question": "Which of the following are Interfaces of java.net package?",
        "code": "",
        "options": [
          "URLStreamHandlerFactory",
          "SocketImplFactory",
          "ProtocolFamily",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_260",
        "question": "The _______class is used to encapsulate both the numerical IP address and the domain name for that address.",
        "code": "",
        "options": [
          "CookieHandler",
          "InetAddress",
          "ContentHandler",
          "CookieManager"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"InetAddress\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 13: Lập trình Mạng (Network Programming)'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 13: Lập trình Mạng (Network Programming)): Chú ý từ khóa trọng tâm 'InetAddress'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_14",
    "title": "Module 14: Xử lý XML trong Java",
    "description": "Phân tích tài liệu XML với DOM Parser, SAX Parser, StAX và cơ chế chuyển đổi XSLT.",
    "category": "Theo Module",
    "badge": "XML Parsing",
    "icon": "📄",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_261",
        "question": "XML stands for _______.",
        "code": "",
        "options": [
          "Asynchronous JavaScript and XML",
          "Extensible Markup Language",
          "HyperText Markup Language",
          "Hypertext Preprocessor"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Extensible Markup Language\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'Extensible Markup Language'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_262",
        "question": "__________ describes the structure of an XML document.",
        "code": "",
        "options": [
          "DCOM",
          "XML schema",
          "DOM",
          "COM"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"XML schema\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'XML schema'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_263",
        "question": "Which of the following class in the javax.xml.bind package provides the client application the ability to convert a Java content tree back into XML data?",
        "code": "",
        "options": [
          "Document",
          "Unmarshaller",
          "Marshalle",
          "rNone of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Marshalle\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'Marshalle'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_264",
        "question": "XSLT stands for _________.",
        "code": "",
        "options": [
          "Extensible Markup Language",
          "HyperText Markup Language",
          "Extensible Stylesheet Language Transformations",
          "Hypertext Preprocessor"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Extensible Stylesheet Language Transformations\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'Extensible Stylesheet Language Transformations'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_265",
        "question": "The ________ does not define any form of binary interoperability.",
        "code": "",
        "options": [
          "SAX",
          "JAXB",
          "DOM",
          "JAXP"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"DOM\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'DOM'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_266",
        "question": "\"DOM Level 1,\" was recommended by W3C in late __________.",
        "code": "",
        "options": [
          "1994",
          "1997",
          "2000",
          "1998"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"1998\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm '1998'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_267",
        "question": "__________ is not a W3C standard.",
        "code": "",
        "options": [
          "SAX",
          "HTTP",
          "DOM",
          "XML"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"SAX\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'SAX'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_268",
        "question": "Which of the following was designed as a median between DOM and SAX?",
        "code": "",
        "options": [
          "StAX",
          "JAXB",
          "XSLT",
          "JAXP"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"StAX\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'StAX'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_269",
        "question": "__________ defines a factory API that enables applications to configure and obtain a SAX based parser to parse XML documents.",
        "code": "",
        "options": [
          "SAXParserFactory",
          "DTDHandler",
          "EntityResolver",
          "DefaultHandler"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"SAXParserFactory\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'SAXParserFactory'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_270",
        "question": "Which of the following is a correct statement about DOM?",
        "code": "",
        "options": [
          "All of the above",
          "Use DOM when you are calling XPath.",
          "Use DOM when you want to have tree iterations and need to walk through the entire document tree",
          "Use the DOM API when you need to use random access"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_271",
        "question": "________ is a language for finding information in an XML document.",
        "code": "",
        "options": [
          "JAXP",
          "XPath",
          "JAXB",
          "SAX"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"XPath\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'XPath'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_272",
        "question": "XML was designed to___________.",
        "code": "",
        "options": [
          "transport and store data",
          "Compile source code",
          "None of the above.",
          "Display data"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"transport and store data\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'transport and store data'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_273",
        "question": "Which of the following method belongs to the window.history object?",
        "code": "",
        "options": [
          "go()",
          "All of the above",
          "forward()",
          "back()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_274",
        "question": "Comment in XML document is given by",
        "code": "",
        "options": [
          "<!-- comment -->",
          "<%-- comment --%>",
          "/* comment */",
          "All of the above"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"<!-- comment -->\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm '<!-- comment -->'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_275",
        "question": "Which of the following is not an XML parser?",
        "code": "",
        "options": [
          "SAX",
          "COM",
          "JDOM",
          "DOM"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"COM\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'COM'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_276",
        "question": "Which of the following XML parser parses an entire XML document and load it into memory, modelling it with Object for easy nodal traversal?",
        "code": "",
        "options": [
          "SAX",
          "JDOM",
          "DCOM.",
          "DOM"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"DOM\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'DOM'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_277",
        "question": "The strength of the ________ specification is that it can scan and parse gigabytes worth of XML documents without hitting resource limits?",
        "code": "",
        "options": [
          "COM.",
          "DOM",
          "JDOM",
          "SAX"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"SAX\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'SAX'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_278",
        "question": "Which of the following java API is for processing XML data using applications written in the Java programming language?",
        "code": "",
        "options": [
          "Channels.",
          "applet",
          "JAXP",
          "CORBA"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"JAXP\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'JAXP'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_279",
        "question": "_________ is a Java standard that defines how Java objects are converted from and to XML.",
        "code": "",
        "options": [
          "JAXP",
          "SAX",
          "JAXB",
          "DOM."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"JAXB\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'JAXB'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_280",
        "question": "What is an XML specification that governs the allowable components of an XML document and the relationships between the components?",
        "code": "",
        "options": [
          "Marshalling",
          "Schema",
          "Unmarshalling",
          "SAX"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Schema\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 14: Xử lý XML trong Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 14: Xử lý XML trong Java): Chú ý từ khóa trọng tâm 'Schema'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_15",
    "title": "Module 15: Gói thư viện java.lang & java.util",
    "description": "Class Object, Math, System, Runtime, Date, Calendar, Time API, Regex Pattern và Locale.",
    "category": "Theo Module",
    "badge": "Lang & Util",
    "icon": "🛠️",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_281",
        "question": "Class _________ is the root of the class hierarchy.",
        "code": "",
        "options": [
          "notify",
          "Object",
          "clone",
          "equals"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Object\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'Object'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_282",
        "question": "Which method returns the value of the Short as a byte?",
        "code": "",
        "options": [
          "double doubleValue()",
          "float floatValue()",
          "int hashCode()",
          "byte byteValue()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"byte byteValue()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'byte byteValue()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_283",
        "question": "Which method returns the number of one-bits in the two's complement binary representation of the specified int value?",
        "code": "",
        "options": [
          "double doubleValue()",
          "static int bitCount(int i)",
          "byte byteValue()",
          "float floatValue()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"static int bitCount(int i)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'static int bitCount(int i)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_284",
        "question": "Which method parses the string argument as a signed decimal integer?",
        "code": "",
        "options": [
          "static int parseInt(String s, int radix)",
          "static Integer getInteger(String nm, int val)",
          "int intValue()",
          "static int parseInt(String s)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"static int parseInt(String s)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'static int parseInt(String s)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_285",
        "question": "Which Constructor of String class initializes a newly created String object so that it represents an empty character sequence?",
        "code": "",
        "options": [
          "String(byte[] bytes, int offset, int length)",
          "String(byte[] bytes, Charset charset)",
          "String(byte[] bytes)",
          "String()"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"String()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'String()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_286",
        "question": "Which method compares two strings lexicographically?",
        "code": "",
        "options": [
          "boolean contentEquals(CharSequence cs)",
          "int compareTo(String anotherString)",
          "boolean contentEquals(StringBuffer sb)",
          "int compareToIgnoreCase(String str)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"int compareTo(String anotherString)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'int compareTo(String anotherString)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_287",
        "question": "Package java.util contains_______________.",
        "code": "",
        "options": [
          "event model",
          "collection classes",
          "date and time facilities",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_288",
        "question": "Which method adds all of the specified elements to the specified collection?",
        "code": "",
        "options": [
          "static <T> int binarySearch(List<? extends T> list, T key, Comparator<? super T< c)",
          "static <T> Queue<T> asLifoQueue(Deque<T> deque)",
          "static <T> int binarySearch(List<? extends Comparable<? super T>> list, T key)",
          "static <T> boolean addAll(Collection<? super T> c, T... elements)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"static <T> boolean addAll(Collection<? super T> c, T... elements)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'static <T> boolean addAll(Collection<? super T> c, T... elements)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_289",
        "question": "Which method returns an unmodifiable view of the specified sorted map?",
        "code": "",
        "options": [
          "static <T> Set<T> unmodifiableSet(Set<? extends T> s)",
          "static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K,? extends V> m)",
          "static <K,V> Map<K,V> unmodifiableMap(Map<? extends K,? extends V> m)",
          "static <T> SortedSet<T> unmodifiableSortedSet(SortedSet<T> s)"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K,? extends V> m)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K,? extends V> m)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_290",
        "question": "Which class object represents a specific geographical, political, or cultural region?",
        "code": "",
        "options": [
          "java.util.ListResourceBundle",
          "java.util.Locale",
          "java.util.calendar",
          "java.util.Collections"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"java.util.Locale\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'java.util.Locale'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_291",
        "question": "Which class provides resizable-array and implements the List interface?",
        "code": "",
        "options": [
          "java.util.Hashtable",
          "java.util.HashMap",
          "java.util.ArrayList",
          "java.util.Arrays"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"java.util.ArrayList\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'java.util.ArrayList'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_292",
        "question": "Which method returns the runtime class of the Object?",
        "code": "",
        "options": [
          "toString()",
          "getClass()",
          "clone()",
          "hashCode()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"getClass()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'getClass()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_293",
        "question": "Annotations are mainly used for_________?",
        "code": "",
        "options": [
          "All of the above.",
          "Information for the compiler",
          "Runtime processing",
          "Compiler-time and deployment time processing"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_294",
        "question": "Which method returns a hash code value for the object?",
        "code": "",
        "options": [
          "hashCode()",
          "toString()",
          "getClass()",
          "clone()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"hashCode()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'hashCode()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_295",
        "question": "Which method converts the object to a string?",
        "code": "",
        "options": [
          "toString()",
          "hashCode()",
          "clone()",
          "getClass()"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"toString()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'toString()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_296",
        "question": "Which method is called by the garbage collector on an object when garbage collection determines that there are no more references to the object?",
        "code": "",
        "options": [
          "equals()",
          "toString()",
          "finalize()",
          "wait()"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"finalize()\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'finalize()'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_297",
        "question": "Which method returns True if the argument is not null and is an object of the same type?",
        "code": "",
        "options": [
          "void notify()",
          "protected void finalize()",
          "int hashCode()",
          "boolean equals(Object obj)"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"boolean equals(Object obj)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'boolean equals(Object obj)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_298",
        "question": "What are the advantages of Immutable Object?",
        "code": "",
        "options": [
          "Immutable objects are automatically thread-safe",
          "Immutable objects are simple to construct, test, and use",
          "All of the above",
          "No need of a copy constructor for Immutable objects"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_299",
        "question": "Which classes are used to convert any data type into an object?",
        "code": "",
        "options": [
          "Stream classes.",
          "Wrapper classes",
          "None of the above.",
          "Collection classes."
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Wrapper classes\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'Wrapper classes'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_300",
        "question": "Which of the following is/are wrapper classes?",
        "code": "",
        "options": [
          "Integer",
          "Byte",
          "Short",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 15: Gói thư viện java.lang & java.util'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 15: Gói thư viện java.lang & java.util): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  },
  {
    "id": "java_mod_16",
    "title": "Module 16: Quốc tế hóa (i18n) & Bảo mật Java",
    "description": "ResourceBundle, Locale, NumberFormat, DateFormat, Security Manager, Bytecode verification và Cryptography.",
    "category": "Theo Module",
    "badge": "i18n & Security",
    "icon": "🛡️",
    "durationMinutes": 25,
    "questions": [
      {
        "id": "q_301",
        "question": "__________ is the process of designing an application so that it can be adapted to various languages and regions without engineering changes.",
        "code": "",
        "options": [
          "Internationalization",
          "Deserialization",
          "Externalization",
          "Serialization"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"Internationalization\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Internationalization'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_302",
        "question": "A/An __________ class is used to make system resource access decisions based on the context it encapsulates.",
        "code": "",
        "options": [
          "Certificate",
          "AccessControlContext",
          "Certificate Factory",
          "X509CertSelector"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"AccessControlContext\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'AccessControlContext'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_303",
        "question": "Which of the following is not a class of java.security package?",
        "code": "",
        "options": [
          "AccessControlContext",
          "BasicPermission",
          "AccessController",
          "AlgorithmConstraints"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"AlgorithmConstraints\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'AlgorithmConstraints'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_304",
        "question": "Which of the following interface of the java.security package defines a set of criteria for selecting Certificates?",
        "code": "",
        "options": [
          "CertSelector",
          "CertPathBuilderResult",
          "CertPathParameters",
          "CertStoreParameters"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"CertSelector\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'CertSelector'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_305",
        "question": "Which of the following class is using for building certification paths?",
        "code": "",
        "options": [
          "CertPathBuilder",
          "CertPath",
          "CertStore.",
          "Certificate"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"CertPathBuilder\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'CertPathBuilder'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_306",
        "question": "When your program needs a locale-specific resource, a String for example, your program can load it from the _______ that is appropriate for the current user's locale.",
        "code": "",
        "options": [
          "Locale",
          "PrintWriter",
          "Serialization",
          "ResourceBundle"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"ResourceBundle\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'ResourceBundle'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_307",
        "question": "Which of the following is not a sub class of ResourceBundle?",
        "code": "",
        "options": [
          "None of the above.",
          "ListResourceBundle",
          "XMLResourseBundle",
          "PropertyResourceBundle"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"XMLResourseBundle\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'XMLResourseBundle'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_308",
        "question": "What does JCA stand for in term of java security?",
        "code": "",
        "options": [
          "Java Connector Architecture",
          "Java Cryptography Extension",
          "Java Cryptography Architecture",
          "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Java Cryptography Architecture\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Java Cryptography Architecture'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_309",
        "question": "Which of the following is a method of MessageDigest class?",
        "code": "",
        "options": [
          "digest()",
          "toString()",
          "getProvider()",
          "All of the above."
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_310",
        "question": "Which of the following is a correct statement about digital signatures?",
        "code": "",
        "options": [
          "You also supply your recipient with your public key.",
          "You \"sign\" the document or code using one of your private keys, which you can generate by using keytool or security API methods.",
          "Your recipient uses your public key to verify that your document came from you.",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_311",
        "question": "_______ Class represents a storage facility for cryptographic keys and certificates.",
        "code": "",
        "options": [
          "Certificate",
          "Keystores",
          "None of the above",
          "Digital signatures"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Keystores\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Keystores'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_312",
        "question": "Which of the following term is often abbreviated as l10n?",
        "code": "",
        "options": [
          "Internationalization",
          "Localization",
          "Serialization",
          "Deserialization"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"Localization\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Localization'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_313",
        "question": "Which of the following class is designed to provide the functionality of a cryptographic digital signature algorithm such as DSA or RSA with MD5?",
        "code": "",
        "options": [
          "Mac",
          "Cipher",
          "Security",
          "Signature"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"Signature\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Signature'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_314",
        "question": "Which of the following is java’s internationalize class?",
        "code": "",
        "options": [
          "All of the above",
          "DecimalFormat",
          "Locale",
          "ResourceBundle"
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'All of the above'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_315",
        "question": "The binary form of programs running on the Java platform is not native machine code but an intermediate __________.",
        "code": "",
        "options": [
          "bytecode",
          "sourcecode",
          "machinecode",
          "All of the above."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"bytecode\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'bytecode'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_316",
        "question": "Which of the following is a JVM’s task to prevent the program from performing unsafe operations such as branching to incorrect locations which may contain data rather than instructions?",
        "code": "",
        "options": [
          "classification",
          "None of the above.",
          "compilation",
          "verification"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"verification\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'verification'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_317",
        "question": "What java platform does not support to improve the security of java applications?",
        "code": "",
        "options": [
          "unmarshalling",
          "Primitive data types.",
          "marshalling",
          "pointers"
        ],
        "correctAnswer": 3,
        "explanation": "Phương án \"pointers\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'pointers'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_318",
        "question": "Which of the following is/are security vulnerabilities in Java applications?",
        "code": "",
        "options": [
          "All of the above.",
          "Errors in user programs.",
          "Native libraries.",
          "Sandboxing mechanism."
        ],
        "correctAnswer": 0,
        "explanation": "Phương án \"All of the above.\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'All of the above.'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_319",
        "question": "Which of the following defines a security policy for an application?",
        "code": "",
        "options": [
          "verification",
          "bytecode",
          "Security Manager",
          "JVM."
        ],
        "correctAnswer": 2,
        "explanation": "Phương án \"Security Manager\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'Security Manager'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      },
      {
        "id": "q_320",
        "question": "The special method ________ determines whether an access request indicated by a specified permission should be granted or denied.",
        "code": "",
        "options": [
          "checkAccess()",
          "checkPermission(java.security.Permission)",
          "hashCode()",
          "getSecurityContext()"
        ],
        "correctAnswer": 1,
        "explanation": "Phương án \"checkPermission(java.security.Permission)\" là câu trả lời chính xác cho câu hỏi này trong chuyên đề 'Module 16: Quốc tế hóa (i18n) & Bảo mật Java'. Kiến thức này phản ánh đúng đặc tả kỹ thuật của ngôn ngữ lập trình Java và cơ chế thực thi của máy ảo JVM.",
        "tip": "MẸO PHÒNG THI (Module 16: Quốc tế hóa (i18n) & Bảo mật Java): Chú ý từ khóa trọng tâm 'checkPermission(java.security.Permission)'. Đề thi Java luôn ưu tiên các chuẩn cú pháp bất biến và thuật ngữ chính xác trong Java API."
      }
    ]
  }
];
