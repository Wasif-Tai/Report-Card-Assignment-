document.addEventListener('DOMContentLoaded', function() {
    const resultContainer = document.getElementById('result-container');

    // Helper: Parse Query Param
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Helper: Calculate Grade
    function calculateGrade(percentage) {
        if (percentage >= 90) return 'A=';
        if (percentage >= 80) return 'A';
        if (percentage >= 70) return 'B';
        if (percentage >= 60) return 'C';
        if (percentage <= 40) return 'Fail';
        return 'Fail';
    }

    // Load Student Data
    function loadStudentResult() {
        const studentId = getQueryParam('id');
        
        if (!studentId) {
            resultContainer.innerHTML = '<p class="text-danger">No student ID provided.</p>';
            return;
        }

        // Find Student
        const student = students.find(s => s.id === studentId);

        if (!student) {
            resultContainer.innerHTML = '<p class="text-danger">Student not found.</p>';
            return;
        }

        // Calculate Totals
        let totalObtained = 0;
        let totalMax = 0;
        
        // Loop through semesters and subjects
        student.semesters.forEach(sem => {
            sem.subjects.forEach(sub => {
                totalObtained += sub.marks;
                totalMax += 100; // Assuming 100 marks per subject
            });
        });

        const percentage = (totalMax > 0) ? ((totalObtained / totalMax) * 100).toFixed(2) : 0;
        const grade = calculateGrade(percentage);

        // Render UI
        renderResult(student, totalObtained, totalMax, percentage, grade);
    }

    function renderResult(student, obtained, max, percentage, grade) {
        // Determine Grade Color Class
        let gradeClass = '';
        if (grade === 'A+') gradeClass = 'grade-APlus';
        else if (grade === 'Fail') gradeClass = 'grade-fail';
        else gradeClass = 'grade-pass';

        let html = `
            <div class="result-header">
                <div class="student-details">
                    <h1>${student.name}</h1>
                    <p class="subtitle">ID: ${student.id}</p>
                </div>
                <div class="grade-badge">
                   <!-- Icon or simple badge could go here -->
                </div>
            </div>

            <div class="summary-grid">
                <div class="summary-item">
                    <strong>Total Marks</strong>
                    <span>${obtained} <small>/ ${max}</small></span>
                </div>
                <div class="summary-item">
                    <strong>Percentage</strong>
                    <span>${percentage}%</span>
                </div>
                <div class="summary-item">
                    <strong>Grade</strong>
                    <span class="${gradeClass}">${grade}</span>
                </div>
            </div>

            <div class="semesters-breakdown">
                <h3>Semester Breakdown</h3>
        `;

        // Generate Semester Tables
        student.semesters.forEach(sem => {
            let semTotal = 0;
            let semMax = sem.subjects.length * 100;
            
            html += `<br><h4>Semester ${sem.semester}</h4>`;
            html += `<table class="semester-table">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>`;
            
            sem.subjects.forEach(sub => {
                semTotal += sub.marks;
                html += `<tr>
                            <td>${sub.name}</td>
                            <td>${sub.marks}</td>
                         </tr>`;
            });

            html += `   <tr style="background-color: #f8fafc; font-weight: 600;">
                            <td>Total</td>
                            <td>${semTotal} / ${semMax}</td>
                        </tr>
                        </tbody>
                    </table>`;
        });

        html += `</div>`; // Close semesters-breakdown

        resultContainer.innerHTML = html;
    }

    // Go Back Function
    window.goBack = function() {
        // Try history back, else close, else redirect
        if (document.referrer.includes('index.html')) {
             window.history.back();
        } else {
             // Fallback if opened directly or history is empty
             window.close(); // Only works if opened by script
             // If window.close() fails (user typed url), redirect to index
             setTimeout(() => {
                 window.location.href = 'index.html';
             }, 100);
        }
    };

    loadStudentResult();
});

function goback() {
    window.location.href = 'index.html';

};
