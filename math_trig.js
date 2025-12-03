window.mathTopics = window.mathTopics || {};

window.mathTopics['ตรีโกณมิติ'] = [
    {
        question: 'sin A คืออัตราส่วนใด?',
        options: ['ข้าม / ฉาก', 'ชิด / ฉาก', 'ข้าม / ชิด', 'ฉาก / ข้าม'],
        correct: 0,
        explanation: 'sin = ด้านตรงข้ามมุม / ด้านตรงข้ามมุมฉาก'
    },
    {
        question: 'cos A คืออัตราส่วนใด?',
        options: ['ข้าม / ฉาก', 'ชิด / ฉาก', 'ข้าม / ชิด', 'ฉาก / ชิด'],
        correct: 1,
        explanation: 'cos = ด้านประชิดมุม / ด้านตรงข้ามมุมฉาก'
    },
    {
        question: 'tan A คืออัตราส่วนใด?',
        options: ['ข้าม / ฉาก', 'ชิด / ฉาก', 'ข้าม / ชิด', 'ชิด / ข้าม'],
        correct: 2,
        explanation: 'tan = ด้านตรงข้ามมุม / ด้านประชิดมุม'
    },
    {
        question: 'cosec A คือส่วนกลับของ?',
        options: ['sin A', 'cos A', 'tan A', 'sec A'],
        correct: 0,
        explanation: 'cosec A = 1 / sin A'
    },
    {
        question: 'sec A คือส่วนกลับของ?',
        options: ['sin A', 'cos A', 'tan A', 'cot A'],
        correct: 1,
        explanation: 'sec A = 1 / cos A'
    },
    {
        question: 'cot A คือส่วนกลับของ?',
        options: ['sin A', 'cos A', 'tan A', 'sec A'],
        correct: 2,
        explanation: 'cot A = 1 / tan A'
    },
    {
        question: 'ค่าของ sin 30° คือ?',
        options: ['1/2', '√3/2', '1/√2', '1'],
        correct: 0,
        explanation: 'sin 30° = 0.5 หรือ 1/2'
    },
    {
        question: 'ค่าของ cos 60° คือ?',
        options: ['1/2', '√3/2', '1/√2', '0'],
        correct: 0,
        explanation: 'cos 60° = 1/2 (เท่ากับ sin 30°)'
    },
    {
        question: 'ค่าของ tan 45° คือ?',
        options: ['1', '0', '∞', '√3'],
        correct: 0,
        explanation: 'tan 45° = sin 45° / cos 45° = 1'
    },
    {
        question: 'เอกลักษณ์ sin²A + cos²A เท่ากับ?',
        options: ['1', '0', '2', '-1'],
        correct: 0,
        explanation: 'เป็นเอกลักษณ์ตรีโกณมิติพื้นฐานที่สุด'
    },
    {
        question: '1 + tan²A เท่ากับ?',
        options: ['sec²A', 'cosec²A', 'cot²A', 'sin²A'],
        correct: 0,
        explanation: 'จาก sin²A + cos²A = 1 หารด้วย cos²A ตลอด จะได้ tan²A + 1 = sec²A'
    },
    {
        question: 'ค่าของ sin 90° คือ?',
        options: ['1', '0', '-1', 'หาค่าไม่ได้'],
        correct: 0,
        explanation: 'ที่มุม 90° จุดบนวงกลมหนึ่งหน่วยคือ (0, 1) ค่า y คือ sin'
    },
    {
        question: 'ค่าของ cos 180° คือ?',
        options: ['1', '0', '-1', 'หาค่าไม่ได้'],
        correct: 2,
        explanation: 'ที่มุม 180° จุดบนวงกลมหนึ่งหน่วยคือ (-1, 0) ค่า x คือ cos'
    },
    {
        question: 'มุม 2π เรเดียน เท่ากับกี่องศา?',
        options: ['360°', '180°', '90°', '270°'],
        correct: 0,
        explanation: 'π เรเดียน = 180°, 2π = 360°'
    },
    {
        question: 'มุม 30° เท่ากับกี่เรเดียน?',
        options: ['π/6', 'π/3', 'π/4', 'π/2'],
        correct: 0,
        explanation: '30 × (π/180) = π/6'
    },
    {
        question: 'Co-function ของ sin A คือ?',
        options: ['cos(90°-A)', 'sin(90°-A)', 'tan(90°-A)', 'sec(90°-A)'],
        correct: 0,
        explanation: 'sin A = cos(90°-A)'
    },
    {
        question: 'ค่าของ sin(-A) เท่ากับ?',
        options: ['-sin A', 'sin A', 'cos A', '-cos A'],
        correct: 0,
        explanation: 'sin เป็นฟังก์ชันคี่ sin(-x) = -sin(x)'
    },
    {
        question: 'ค่าของ cos(-A) เท่ากับ?',
        options: ['cos A', '-cos A', 'sin A', '-sin A'],
        correct: 0,
        explanation: 'cos เป็นฟังก์ชันคู่ cos(-x) = cos(x)'
    },
    {
        question: 'กฎของไซน์ (Sine Law) คือ?',
        options: ['a/sinA = b/sinB = c/sinC', 'a² = b² + c² - 2bc cosA', 'sinA + sinB = sinC', 'ไม่มีข้อถูก'],
        correct: 0,
        explanation: 'อัตราส่วนระหว่างความยาวด้านกับไซน์ของมุมตรงข้ามจะเท่ากันเสมอ'
    },
    {
        question: 'กฎของโคไซน์ (Cosine Law) คือ?',
        options: ['a² = b² + c² - 2bc cosA', 'a/sinA = b/sinB', 'c² = a² + b²', 'a = b cosC'],
        correct: 0,
        explanation: 'ใช้หาความยาวด้านเมื่อรู้สองด้านและมุมระหว่างด้านนั้น'
    },
    {
        question: 'ค่าสูงสุดของ sin A คือ?',
        options: ['1', '∞', '0', '2'],
        correct: 0,
        explanation: 'ค่า sin อยู่ในช่วง [-1, 1]'
    },
    {
        question: 'ค่าต่ำสุดของ cos A คือ?',
        options: ['-1', '0', '-∞', '1'],
        correct: 0,
        explanation: 'ค่า cos อยู่ในช่วง [-1, 1]'
    },
    {
        question: 'แอมพลิจูดของ y = 3sin(2x) คือ?',
        options: ['3', '2', '6', '1'],
        correct: 0,
        explanation: 'แอมพลิจูดคือสัมประสิทธิ์หน้าฟังก์ชัน sin ซึ่งคือ 3'
    },
    {
        question: 'คาบของ y = sin(2x) คือ?',
        options: ['π', '2π', '4π', 'π/2'],
        correct: 0,
        explanation: 'คาบ = 2π/k = 2π/2 = π'
    },
    {
        question: 'sin(A+B) เท่ากับ?',
        options: ['sinAcosB + cosAsinB', 'sinAcosB - cosAsinB', 'cosAcosB - sinAsinB', 'sinA + sinB'],
        correct: 0,
        explanation: 'สูตรผลบวกมุมของ sin'
    },
    {
        question: 'cos(A+B) เท่ากับ?',
        options: ['cosAcosB - sinAsinB', 'cosAcosB + sinAsinB', 'sinAcosB + cosAsinB', 'cosA + cosB'],
        correct: 0,
        explanation: 'สูตรผลบวกมุมของ cos (เครื่องหมายตรงข้าม)'
    },
    {
        question: 'sin(2A) เท่ากับ?',
        options: ['2sinAcosA', 'sin²A - cos²A', '2tanA', 'cos²A - sin²A'],
        correct: 0,
        explanation: 'สูตรมุมสองเท่าของ sin'
    },
    {
        question: 'cos(2A) เท่ากับข้อใด?',
        options: ['cos²A - sin²A', '2cos²A - 1', '1 - 2sin²A', 'ถูกทุกข้อ'],
        correct: 3,
        explanation: 'cos(2A) มี 3 สูตรที่ใช้บ่อย และทั้งหมดถูกต้อง'
    },
    {
        question: 'tan(A+B) เท่ากับ?',
        options: ['(tanA+tanB)/(1-tanAtanB)', '(tanA-tanB)/(1+tanAtanB)', 'tanA + tanB', '1'],
        correct: 0,
        explanation: 'สูตรผลบวกมุมของ tan'
    },
    {
        question: 'ถ้า sin A = 3/5 และ A เป็นมุมแหลม แล้ว cos A เท่ากับ?',
        options: ['4/5', '3/4', '5/3', '5/4'],
        correct: 0,
        explanation: 'จากสามเหลี่ยมมุมฉาก 3-4-5 ถ้าข้าม=3 ฉาก=5 แล้วชิด=4'
    },
    {
        question: 'ค่าของ sin 120° คือ?',
        options: ['√3/2', '1/2', '-1/2', '-√3/2'],
        correct: 0,
        explanation: 'sin 120° = sin(180°-60°) = sin 60° = √3/2 (Q2 sin เป็นบวก)'
    },
    {
        question: 'ค่าของ cos 120° คือ?',
        options: ['-1/2', '1/2', '√3/2', '-√3/2'],
        correct: 0,
        explanation: 'cos 120° = cos(180°-60°) = -cos 60° = -1/2 (Q2 cos เป็นลบ)'
    },
    {
        question: 'ค่าของ tan 135° คือ?',
        options: ['-1', '1', '0', '∞'],
        correct: 0,
        explanation: 'tan 135° = tan(180°-45°) = -tan 45° = -1'
    },
    {
        question: 'arcsin(1/2) เท่ากับกี่องศา (ในช่วงหลัก)?',
        options: ['30°', '60°', '45°', '90°'],
        correct: 0,
        explanation: 'sin 30° = 1/2'
    },
    {
        question: 'arccos(0) เท่ากับกี่องศา?',
        options: ['90°', '0°', '180°', '45°'],
        correct: 0,
        explanation: 'cos 90° = 0'
    },
    {
        question: 'arctan(1) เท่ากับกี่องศา?',
        options: ['45°', '135°', '225°', '30°'],
        correct: 0,
        explanation: 'tan 45° = 1'
    },
    {
        question: 'ในสามเหลี่ยม ABC ถ้า A=30°, B=60° แล้ว C=?',
        options: ['90°', '60°', '30°', '45°'],
        correct: 0,
        explanation: '180° - 30° - 60° = 90°'
    },
    {
        question: 'ด้านตรงข้ามมุมฉากยาวที่สุดเสมอ จริงหรือไม่?',
        options: ['จริง', 'เท็จ', 'บางครั้ง', 'เฉพาะสามเหลี่ยมหน้าจั่ว'],
        correct: 0,
        explanation: 'ในสามเหลี่ยมมุมฉาก ด้านตรงข้ามมุมฉากยาวที่สุดเสมอ'
    },
    {
        question: 'ค่าของ sin²30° + cos²30° คือ?',
        options: ['1', '0.5', '0.25', '0'],
        correct: 0,
        explanation: 'เอกลักษณ์ตรีโกณมิติ sin²θ + cos²θ = 1 เสมอ'
    },
    {
        question: 'ถ้า tan A = 3/4 แล้ว sin A คือ?',
        options: ['3/5', '4/5', '3/7', '4/7'],
        correct: 0,
        explanation: 'สามเหลี่ยม 3-4-5, tan=ข้าม/ชิด=3/4 → sin=ข้าม/ฉาก=3/5'
    },
    {
        question: 'sec²A - tan²A เท่ากับ?',
        options: ['1', '0', '-1', '2'],
        correct: 0,
        explanation: 'จาก 1 + tan²A = sec²A ย้ายข้างได้ 1'
    },
    {
        question: 'ค่าของ sin(π) คือ?',
        options: ['0', '1', '-1', 'หาค่าไม่ได้'],
        correct: 0,
        explanation: 'sin 180° = 0'
    },
    {
        question: 'ค่าของ cos(2π) คือ?',
        options: ['1', '0', '-1', 'หาค่าไม่ได้'],
        correct: 0,
        explanation: 'cos 360° = 1'
    },
    {
        question: 'กราฟ y = tan x มีเส้นกำกับที่?',
        options: ['x = π/2 + nπ', 'x = nπ', 'x = 0', 'ไม่มี'],
        correct: 0,
        explanation: 'tan หาค่าไม่ได้ที่ 90°, 270°, ...'
    },
    {
        question: 'เรนจ์ของ y = arctan x คือ?',
        options: ['(-π/2, π/2)', '[-π/2, π/2]', '[0, π]', 'R'],
        correct: 0,
        explanation: 'เรนจ์ของ arctan อยู่ในช่วงเปิด (-90°, 90°)'
    },
    {
        question: 'ถ้า sin A = 0.6, cos A = 0.8 แล้ว tan A = ?',
        options: ['0.75', '1.33', '0.48', '1.4'],
        correct: 0,
        explanation: 'tan = sin/cos = 0.6/0.8 = 6/8 = 3/4 = 0.75'
    },
    {
        question: 'มุมเงย (Angle of Elevation) วัดจากไหน?',
        options: ['ระดับสายตาขึ้นไป', 'ระดับสายตาลงมา', 'แนวดิ่ง', 'ทิศเหนือ'],
        correct: 0,
        explanation: 'มุมเงยวัดจากระดับสายตาขึ้นไปหาวัตถุ'
    },
    {
        question: 'มุมก้ม (Angle of Depression) วัดจากไหน?',
        options: ['ระดับสายตาลงมา', 'ระดับสายตาขึ้นไป', 'แนวดิ่ง', 'ทิศเหนือ'],
        correct: 0,
        explanation: 'มุมก้มวัดจากระดับสายตาลงมาหาวัตถุ'
    },
    {
        question: 'ข้อใดไม่ใช่ฟังก์ชันตรีโกณมิติ?',
        options: ['log', 'sin', 'cos', 'tan'],
        correct: 0,
        explanation: 'log เป็นฟังก์ชันลอการิทึม'
    },
    {
        question: 'ค่าของ sin 45° cos 45° คือ?',
        options: ['1/2', '1', '√2', '1/4'],
        correct: 0,
        explanation: '(√2/2) × (√2/2) = 2/4 = 1/2'
    }
];
