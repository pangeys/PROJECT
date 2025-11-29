document.addEventListener("DOMContentLoaded", () => {

    const transition = document.getElementById("pageTransition");
    const signUpBtn = document.querySelector(".signup-btn");

    // If button exists (avoid errors on pages without .signup-btn)
    if (signUpBtn && transition) {
        signUpBtn.addEventListener("click", (e) => {
            e.preventDefault();

            // Trigger cinematic transition (black bars)
            transition.classList.add("show");

            // Redirect after animation
            setTimeout(() => {
                window.location.href = "{{ url_for('signup') }}";
            }, 800);
        });
    }

});