const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      try {
        const formData = new FormData(form);

        console.log("Form Data:");
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      } catch (error) {
        console.error("Error reading form data:", error);
      }
    });