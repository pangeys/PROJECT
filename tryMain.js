document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown-btn');
        const content = dropdown.querySelector('.dropdown-content');
        const links = dropdown.querySelectorAll('.dropdown-content a');
        
        // Toggle dropdown on button click
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
        
        // Update button text when an item is selected
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                btn.textContent = this.textContent;
                btn.classList.remove('error'); // remove error highlight after picking
                dropdown.classList.remove('active');
            });
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // ---------------------------------------
    // REQUIRED VALIDATION + GET RESULTS
    // ---------------------------------------

    const submitBtn = document.querySelector('.submit-btn');
    const resultPanel = document.getElementById('resultPanel');

    submitBtn.addEventListener('click', function() {
        let valid = true;
        let selections = [];

        document.querySelectorAll('.dropdown-btn').forEach(btn => {
            let value = btn.textContent.trim();
            selections.push(value);

            // check if still default text (not selected)
            if (value.startsWith("Select")) {
                valid = false;
                btn.classList.add('error'); // highlight missing dropdown
            }
        });

        if (!valid) {
            alert("Please complete all skills before getting results.");
            return; // stop execution
        }

        // If all dropdowns are selected, show results
        let result = 
            "Your Selected Results:\n\n" +
            "• Interest In: " + selections[0] + "\n" +
            "• Marco: " + selections[1] + "\n" +
            "• Experience Level: " + selections[2] + "\n" +
            "• Airon: " + selections[3] + "\n" +
            "• Nicole: " + selections[4] + "\n" +
            "• Darrel: " + selections[5];

        resultPanel.style.display = "block";
        resultPanel.textContent = result;
    });
});
