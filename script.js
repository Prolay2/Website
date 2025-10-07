// Menu item activation with content switching
const menuItems = document.querySelectorAll('.menu-item');
const headerTitle = document.querySelector('.header-title');
const contentArea = document.querySelector('.content-area');

// Content for each page
const pageContents = {
    dashboard: {
        title: "Dashboard",
        html: `
            <div class="welcome-section">
                <h1 class="welcome-text">Dashboard Overview</h1>
                <div class="dashboard-content">
                    <div class="stats-container">
                        <div class="stat-card">
                            <h3>Total Students</h3>
                            <p class="stat-number">150</p>
                        </div>
                        <div class="stat-card">
                            <h3>Active Sessions</h3>
                            <p class="stat-number">12</p>
                        </div>
                        <div class="stat-card">
                            <h3>Today's Attendance</h3>
                            <p class="stat-number">85%</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    students: {
        title: "Manage Students", 
        html: `
            <section class="students-page">
                <h1 class="section-title">Student Management</h1>
                <div class="management-content">
                    <form id="student-form" class="student-form" autocomplete="off">
                        <div class="form-grid">
                            <div class="form-field">
                                <label for="student-first-name">First Name</label>
                                <input id="student-first-name" name="firstName" type="text" placeholder="e.g., Priya" required pattern="^[A-Za-z][A-Za-z\s]*$" title="Only letters and spaces; numbers are not allowed." />
                            </div>
                            <div class="form-field">
                                <label for="student-middle-name">Middle Name (optional)</label>
                                <input id="student-middle-name" name="middleName" type="text" placeholder="e.g., Kumar" pattern="^[A-Za-z][A-Za-z\s]*$" title="Only letters and spaces; numbers are not allowed." />
                            </div>
                            <div class="form-field">
                                <label for="student-last-name">Last Name</label>
                                <input id="student-last-name" name="lastName" type="text" placeholder="e.g., Sharma" required pattern="^[A-Za-z][A-Za-z\s]*$" title="Only letters and spaces; numbers are not allowed." />
                            </div>
                            <div class="form-field">
                                <label for="student-email">Email</label>
                                <input id="student-email" name="email" type="email" placeholder="e.g., priya@example.com" required />
                            </div>
                            <div class="form-field">
                                <label for="student-year">Admission Year</label>
                                <select id="student-year" name="admissionYear" required></select>
                            </div>
                            <div class="form-field">
                                <label for="student-course">Course</label>
                                <select id="student-course" name="course" required>
                                    <option value="">Select course</option>
                                    <option value="B Tech">B Tech</option>
                                    <option value="M Tech">M Tech</option>
                                    <option value="BCA">BCA</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <label for="student-major">Major</label>
                                <select id="student-major" name="major" required>
                                    <option value="">Select major</option>
                                    <option value="None">None</option>
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AI/ML">CSE AI/ML</option>
                                    <option value="IT">IT</option>
                                    <option value="ECE">ECE</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <label for="student-phone">Phone Number</label>
                                <input id="student-phone" name="phone" type="tel" placeholder="e.g., 9876543210" required inputmode="numeric" pattern="^[0-9]{10}$" maxlength="10" title="Enter a 10-digit phone number (numbers only)." />
                            </div>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="action-btn primary">Add Student</button>
                            <button type="reset" class="action-btn secondary">Clear</button>
                    </div>
                    </form>

                    <div class="list-header">
                    <div class="search-section">
                            <input id="student-search" type="text" placeholder="Search by name, email, ID, year, course" class="search-input" />
                        </div>
                        <div class="meta">
                            <span id="students-count" class="meta-text">0 students</span>
                        </div>
                    </div>

                    <div class="table-container">
                        <table class="students-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    
                                    <th>ID</th>
                                    <th>Year</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Admission Year</th>
                                    <th>Course</th>
                                    <th>Major</th>
                                    <th style="width: 110px;">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="students-tbody">
                                <!-- rows injected here -->
                            </tbody>
                        </table>
                        <div id="empty-state" class="empty-state" aria-live="polite">No students yet. Add the first student above.</div>
                    </div>
                </div>
            </section>
        `
    },
    sessions: {
        title: "Manage Sessions",
        html: `
            <section class="students-page">
                <h1 class="section-title">Session Management</h1>
                <div class="management-content">
                    <form id="session-form" class="student-form" autocomplete="off">
                        <div class="form-grid">
                            <div class="form-field">
                                <label for="session-title">Session Title</label>
                                <input id="session-title" name="title" type="text" placeholder="e.g., DBMS Lecture" required />
                            </div>
                            <div class="form-field">
                                <label for="session-date">Date</label>
                                <input id="session-date" name="date" type="date" required />
                            </div>
                            <div class="form-field">
                                <label for="session-start">Start Time</label>
                                <input id="session-start" name="start" type="time" required />
                            </div>
                            <div class="form-field">
                                <label for="session-end">End Time</label>
                                <input id="session-end" name="end" type="time" required />
                            </div>
                            <div class="form-field">
                                <label for="session-course">Course</label>
                                <select id="session-course" name="course" required>
                                    <option value="">Select course</option>
                                    <option value="B Tech">B Tech</option>
                                    <option value="M Tech">M Tech</option>
                                    <option value="BCA">BCA</option>
                                    <option value="MCA">MCA</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <label for="session-major">Major</label>
                                <select id="session-major" name="major" required>
                                    <option value="">Select major</option>
                                    <option value="None">None</option>
                                    <option value="CSE">CSE</option>
                                    <option value="CSE AI/ML">CSE AI/ML</option>
                                    <option value="IT">IT</option>
                                    <option value="ECE">ECE</option>
                                </select>
                    </div>
                            <div class="form-field">
                                <label for="session-mode">Mode</label>
                                <select id="session-mode" name="mode" required>
                                    <option value="Offline">Offline</option>
                                    <option value="Online">Online</option>
                        </select>
                            </div>
                            <div class="form-field">
                                <label for="session-room">Room / Link</label>
                                <input id="session-room" name="room" type="text" placeholder="e.g., Room 204 or Meet link" required />
                            </div>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="action-btn primary">Add Session</button>
                            <button type="reset" class="action-btn secondary">Clear</button>
                        </div>
                    </form>

                    <div class="list-header">
                        <div class="search-section">
                            <input id="session-search" type="text" placeholder="Search by title, course, major, mode, room" class="search-input" />
                        </div>
                        <div class="meta">
                            <span id="sessions-count" class="meta-text">0 sessions</span>
                        </div>
                    </div>

                    <div class="table-container">
                        <table class="students-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th>Duration</th>
                                    <th>Course</th>
                                    <th>Major</th>
                                    <th>Mode</th>
                                    <th>Room/Link</th>
                                    <th style="width: 110px;">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="sessions-tbody"></tbody>
                        </table>
                        <div id="sessions-empty" class="empty-state" aria-live="polite">No sessions yet. Add one above.</div>
                    </div>
                </div>
            </section>
        `
    },
    access: {
        title: "Manage Access",
        html: `
            <div class="welcome-section">
                <h1 class="welcome-text">Access Management</h1>
                <div class="management-content">
                    <div class="action-buttons">
                        <button class="action-btn primary">Add User</button>
                        <button class="action-btn secondary">Manage Roles</button>
                        <button class="action-btn secondary">View Permissions</button>
                    </div>
                    <div class="access-tabs">
                        <button class="tab-btn active">Users</button>
                        <button class="tab-btn">Roles</button>
                        <button class="tab-btn">Permissions</button>
                    </div>
                    <div class="table-container">
                        <p>Access control list will be displayed here...</p>
                    </div>
                </div>
            </div>
        `
    }
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all menu items
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Get the page type from data-page attribute
        const page = item.getAttribute('data-page');
        
        // Update content if page exists
        if (pageContents[page]) {
            headerTitle.textContent = pageContents[page].title;
            contentArea.innerHTML = pageContents[page].html;
            if (page === 'students') {
                initStudentsPage();
            } else if (page === 'sessions') {
                initSessionsPage();
            }
        }
    });
});

// Theme toggle functionality
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('.icon');

toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    
    if (current === 'light') {
        document.documentElement.removeAttribute('data-theme');
        icon.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        icon.textContent = '☀️';
    }
});

// Initialize dashboard as default page on load
document.addEventListener('DOMContentLoaded', () => {
        const defaultPage = 'dashboard';
        const defaultMenuItem = document.querySelector(`[data-page="${defaultPage}"]`);
        if (defaultMenuItem && pageContents[defaultPage]) {
            headerTitle.textContent = pageContents[defaultPage].title;
            contentArea.innerHTML = pageContents[defaultPage].html;
        if (defaultPage === 'students') {
            initStudentsPage();
        } else if (defaultPage === 'sessions') {
            initSessionsPage();
        }
    }
});

// ----------------------
// Students page logic
// ----------------------
const STUDENTS_KEY = 'upastithi_students_v1';

function getStudents() {
    try {
        const raw = localStorage.getItem(STUDENTS_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

// ----------------------
// Sessions page logic
// ----------------------
const SESSIONS_KEY = 'upastithi_sessions_v1';

function getSessions() {
    try {
        const raw = localStorage.getItem(SESSIONS_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveSessions(sessions) {
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}

function createSession({ title, date, start, end, course, major, mode, room }) {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    const durationMins = computeDurationMins(start, end);
    return { id, title: title.trim(), date, start, end, course, major, mode, room: room.trim(), durationMins };
}

function computeDurationMins(start, end) {
    if (!start || !end) return 0;
    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    const mins = (eh * 60 + em) - (sh * 60 + sm);
    return Math.max(0, mins);
}

function formatDuration(mins) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h && m) return `${h}h ${m}m`;
    if (h) return `${h}h`;
    return `${m}m`;
}

function renderSessions(list, filterText = '') {
    const tbody = document.getElementById('sessions-tbody');
    const countEl = document.getElementById('sessions-count');
    const empty = document.getElementById('sessions-empty');
    if (!tbody || !countEl || !empty) return;

    const q = filterText.trim().toLowerCase();
    const filtered = q
        ? list.filter(s =>
            s.title.toLowerCase().includes(q) ||
            s.course.toLowerCase().includes(q) ||
            s.major.toLowerCase().includes(q) ||
            s.mode.toLowerCase().includes(q) ||
            s.room.toLowerCase().includes(q)
          )
        : list;

    tbody.innerHTML = filtered.map(s => `
        <tr data-id="${s.id}">
            <td>${escapeHtml(s.title)}</td>
            <td>${escapeHtml(s.date)}</td>
            <td>${escapeHtml(s.start)}</td>
            <td>${escapeHtml(s.end)}</td>
            <td>${escapeHtml(formatDuration(s.durationMins))}</td>
            <td>${escapeHtml(s.course)}</td>
            <td>${escapeHtml(s.major)}</td>
            <td>${escapeHtml(s.mode)}</td>
            <td>${escapeHtml(s.room)}</td>
            <td>
                <button class="row-btn danger" data-action="delete">Delete</button>
            </td>
        </tr>
    `).join('');

    countEl.textContent = `${list.length} ${list.length === 1 ? 'session' : 'sessions'}`;
    empty.style.display = list.length === 0 ? 'block' : 'none';
}

function initSessionsPage() {
    const form = document.getElementById('session-form');
    const searchInput = document.getElementById('session-search');
    const tbody = document.getElementById('sessions-tbody');

    let sessions = getSessions();
    renderSessions(sessions);

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const fd = new FormData(form);
            const title = String(fd.get('title') || '');
            const date = String(fd.get('date') || '');
            const start = String(fd.get('start') || '');
            const end = String(fd.get('end') || '');
            const course = String(fd.get('course') || '');
            const major = String(fd.get('major') || '');
            const mode = String(fd.get('mode') || '');
            const room = String(fd.get('room') || '');

            if (!title.trim() || !date || !start || !end || !course || !major || !mode || !room.trim()) return;

            const sess = createSession({ title, date, start, end, course, major, mode, room });
            sessions.unshift(sess);
            saveSessions(sessions);
            renderSessions(sessions, searchInput ? searchInput.value : '');
            form.reset();
            document.getElementById('session-title').focus();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderSessions(sessions, searchInput.value);
        });
    }

    if (tbody) {
        tbody.addEventListener('click', (e) => {
            const target = e.target;
            if (!(target instanceof Element)) return;
            const action = target.getAttribute('data-action');
            if (action === 'delete') {
                const row = target.closest('tr');
                const id = row && row.getAttribute('data-id');
                if (!id) return;
                sessions = sessions.filter(s => s.id !== id);
                saveSessions(sessions);
                renderSessions(sessions, searchInput ? searchInput.value : '');
            }
        });
    }
}

function saveStudents(students) {
    localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
}

function randomStudentId() {
    const n = Math.floor(100000 + Math.random() * 900000); // 6 digits
    return `SID-${n}`;
}

function computeStudentYear(admissionYear) {
    const now = new Date().getFullYear();
    const ay = Number(admissionYear);
    if (!Number.isFinite(ay)) return '';
    const diff = now - ay + 1; // Year 1 during admission year
    return diff < 1 ? 1 : diff;
}

function createStudent({ firstName, middleName, lastName, email, admissionYear, course, major, phone }) {
    const cleanFirst = String(firstName || '').replace(/\s+/g, ' ').trim();
    const cleanMiddle = String(middleName || '').replace(/\s+/g, ' ').trim();
    const cleanLast = String(lastName || '').replace(/\s+/g, ' ').trim();
    const displayName = [cleanFirst, cleanMiddle, cleanLast].filter(Boolean).join(' ');
    return {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        name: displayName,
        firstName: cleanFirst,
        middleName: cleanMiddle,
        lastName: cleanLast,
        email: email.trim(),
        admissionYear: String(admissionYear || '').trim(),
        course: String(course || '').trim(),
        major: String(major || '').trim(),
        phone: String(phone || '').trim(),
        studentId: randomStudentId(),
        year: computeStudentYear(admissionYear)
    };
}

function renderStudents(list, filterText = '') {
    const tbody = document.getElementById('students-tbody');
    const countEl = document.getElementById('students-count');
    const empty = document.getElementById('empty-state');
    if (!tbody || !countEl || !empty) return;

    const q = filterText.trim().toLowerCase();
    const filtered = q
        ? list.filter(s =>
            s.name.toLowerCase().includes(q) ||
            s.email.toLowerCase().includes(q) ||
            String(s.phone || '').toLowerCase().includes(q) ||
            String(s.studentId || '').toLowerCase().includes(q) ||
            String(s.year || '').toLowerCase().includes(q) ||
            String(s.admissionYear || '').toLowerCase().includes(q) ||
            String(s.course || '').toLowerCase().includes(q) ||
            String(s.major || '').toLowerCase().includes(q)
          )
        : list;

    tbody.innerHTML = filtered.map(s => `
        <tr data-id="${s.id}">
            <td>${escapeHtml(s.name)}</td>
            <td>${escapeHtml(s.studentId || '')}</td>
            <td>${escapeHtml(String(s.year || ''))}</td>
            <td>${escapeHtml(s.email)}</td>
            <td>${escapeHtml(s.phone || '')}</td>
            <td>${escapeHtml(s.admissionYear || '')}</td>
            <td>${escapeHtml(s.course || '')}</td>
            <td>${escapeHtml(s.major || '')}</td>
            <td>
                <button class="row-btn danger" data-action="delete">Delete</button>
            </td>
        </tr>
    `).join('');

    countEl.textContent = `${list.length} ${list.length === 1 ? 'student' : 'students'}`;
    empty.style.display = list.length === 0 ? 'block' : 'none';
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function initStudentsPage() {
    const form = document.getElementById('student-form');
    const searchInput = document.getElementById('student-search');
    const tbody = document.getElementById('students-tbody');
    const yearSelect = document.getElementById('student-year');
    const phoneInput = document.getElementById('student-phone');

    let students = getStudents();
    renderStudents(students);

    // Populate Admission Year dropdown: last 10 years + current + next 1
    if (yearSelect && yearSelect.children.length === 0) {
        const current = new Date().getFullYear();
        const years = [];
        for (let y = current + 1; y >= current - 10; y--) years.push(y);
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'Select year';
        yearSelect.appendChild(placeholder);
        years.forEach(y => {
            const opt = document.createElement('option');
            opt.value = String(y);
            opt.textContent = String(y);
            yearSelect.appendChild(opt);
        });
    }

    // Sanitize phone input to digits only, max 10
    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            const digitsOnly = phoneInput.value.replace(/\D/g, '').slice(0, 10);
            if (digitsOnly !== phoneInput.value) {
                phoneInput.value = digitsOnly;
            }
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const firstName = String(formData.get('firstName') || '').replace(/\s+/g, ' ').trim();
            const middleName = String(formData.get('middleName') || '').replace(/\s+/g, ' ').trim();
            const lastName = String(formData.get('lastName') || '').replace(/\s+/g, ' ').trim();
            const email = String(formData.get('email') || '');
            const admissionYear = String(formData.get('admissionYear') || '');
            const course = String(formData.get('course') || '');
            const major = String(formData.get('major') || '');
            const phone = String(formData.get('phone') || '');

            if (!firstName || !lastName || !email.trim() || !admissionYear.trim() || !course.trim() || !major.trim() || !phone.trim()) return;

            // Additional validation
            if (!/^[A-Za-z][A-Za-z\s]*$/.test(firstName)) {
                alert('First name must contain only letters and spaces.');
                return;
            }
            if (middleName && !/^[A-Za-z][A-Za-z\s]*$/.test(middleName)) {
                alert('Middle name must contain only letters and spaces.');
                return;
            }
            if (!/^[A-Za-z][A-Za-z\s]*$/.test(lastName)) {
                alert('Last name must contain only letters and spaces.');
                return;
            }
            if (!/@/.test(email.trim())) {
                alert('Email must contain @');
                return;
            }
            if (!/^\d{10}$/.test(phone.trim())) {
                alert('Phone must be exactly 10 digits.');
                return;
            }

            const student = createStudent({ firstName, middleName, lastName, email, admissionYear, course, major, phone });
            students.unshift(student);
            saveStudents(students);
            renderStudents(students, searchInput ? searchInput.value : '');
            form.reset();
            document.getElementById('student-first-name').focus();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderStudents(students, searchInput.value);
        });
    }

    if (tbody) {
        tbody.addEventListener('click', (e) => {
            const target = e.target;
            if (!(target instanceof Element)) return;
            const action = target.getAttribute('data-action');
            if (action === 'delete') {
                const row = target.closest('tr');
                const id = row && row.getAttribute('data-id');
                if (!id) return;
                students = students.filter(s => s.id !== id);
                saveStudents(students);
                renderStudents(students, searchInput ? searchInput.value : '');
            }
        });
    }
}
