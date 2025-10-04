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
            <div class="welcome-section">
                <h1 class="welcome-text">Student Management</h1>
                <div class="management-content">
                    <div class="action-buttons">
                        <button class="action-btn primary">Add New Student</button>
                        <button class="action-btn secondary">Import Students</button>
                        <button class="action-btn secondary">Export Data</button>
                    </div>
                    <div class="search-section">
                        <input type="text" placeholder="Search students..." class="search-input">
                        <button class="action-btn">Search</button>
                    </div>
                    <div class="table-container">
                        <p>Student list will be displayed here...</p>
                    </div>
                </div>
            </div>
        `
    },
    sessions: {
        title: "Manage Sessions",
        html: `
            <div class="welcome-section">
                <h1 class="welcome-text">Session Management</h1>
                <div class="management-content">
                    <div class="action-buttons">
                        <button class="action-btn primary">Create New Session</button>
                        <button class="action-btn secondary">Schedule Session</button>
                        <button class="action-btn secondary">View Reports</button>
                    </div>
                    <div class="session-filters">
                        <select class="filter-select">
                            <option>All Sessions</option>
                            <option>Active Sessions</option>
                            <option>Completed Sessions</option>
                            <option>Upcoming Sessions</option>
                        </select>
                        <input type="date" class="date-input">
                    </div>
                    <div class="table-container">
                        <p>Session list will be displayed here...</p>
                    </div>
                </div>
            </div>
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

// Netflix-style intro functionality
function showIntro() {
    const introOverlay = document.getElementById('intro-overlay');
    
    // Show intro for 4 seconds total
    setTimeout(() => {
        introOverlay.classList.add('fade-out');
        
        // Remove intro overlay after fade animation completes
        setTimeout(() => {
            introOverlay.style.display = 'none';
        }, 1000); // Match CSS transition duration
    }, 4000);
}

// Initialize dashboard as default page on load
document.addEventListener('DOMContentLoaded', () => {
    // Show intro animation first
    showIntro();
    
    // Initialize dashboard after intro
    setTimeout(() => {
        const defaultPage = 'dashboard';
        const defaultMenuItem = document.querySelector(`[data-page="${defaultPage}"]`);
        
        if (defaultMenuItem && pageContents[defaultPage]) {
            headerTitle.textContent = pageContents[defaultPage].title;
            contentArea.innerHTML = pageContents[defaultPage].html;
        }
    }, 5000); // Wait for intro to complete
});