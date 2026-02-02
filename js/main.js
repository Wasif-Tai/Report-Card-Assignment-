document.addEventListener('DOMContentLoaded', function() {
    const studentListContainer = document.getElementById('student-list');

    // Function to render student cards
    function renderStudents() {
        // Clear container just in case
        studentListContainer.innerHTML = '';

        // Check if students array exists
        if (typeof students === 'undefined' || !students) {
            studentListContainer.innerHTML = '<p>No student data found.</p>';
            return;
        }

        students.forEach(student => {
            // Create Card Element
            const card = document.createElement('div');
            card.className = 'card';

            // Card Content
            card.innerHTML = `
                <div class="student-avatar">
                    ${student.name.charAt(0)}
                </div>
                <div class="student-info">
                    <h2>${student.name}</h2>
                    <p>ID: ${student.id}</p>
                </div>
                <div class="card-actions" style="margin-top: auto; width: 100%;">
                    <button class="btn btn-primary" style="width: 100%;" onclick="viewResult('${student.id}')">
                        View Performance
                    </button>
                </div>
            `;

            // Append to container
            studentListContainer.appendChild(card);
        });
    }

    // Global function to handle view result click
    window.viewResult = function(studentId) {
        // Open result page in new tab
        window.open(`result.html?id=${studentId}`, '_blank');
    };

    // Initial render
    renderStudents();
});

function goback() {
    window.location.href = 'index.html';

};