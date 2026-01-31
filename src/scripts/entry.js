// Entry page logic - handles human/agent selection

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const humanButton = document.getElementById('humanButton');
    const agentButton = document.getElementById('agentButton');
    const agentModal = document.getElementById('agentModal');
    const closeModalButton = document.getElementById('closeModal');
    const copyButton = document.getElementById('copyButton');
    const agentUrlElement = document.getElementById('agentUrl');

    // Generate the full URL for the agent markdown file
    // This will work both in development and production
    const agentUrl = `${window.location.origin}/agent.md`;

    // Set the URL in the modal
    if (agentUrlElement) {
        agentUrlElement.textContent = agentUrl;
    }

    // Handle "I'm a Human" button click
    // Redirect to the main website homepage
    if (humanButton) {
        humanButton.addEventListener('click', () => {
            window.location.href = '/index.html';
        });
    }

    // Handle "I'm an Agent" button click
    // Show modal with instructions and URL
    if (agentButton) {
        agentButton.addEventListener('click', () => {
            if (agentModal) {
                agentModal.classList.add('active');
                agentModal.setAttribute('aria-hidden', 'false');
            }
        });
    }

    // Handle close modal button click
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            if (agentModal) {
                agentModal.classList.remove('active');
                agentModal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Handle copy URL button click
    if (copyButton) {
        copyButton.addEventListener('click', async () => {
            try {
                // Use modern Clipboard API to copy the URL
                await navigator.clipboard.writeText(agentUrl);

                // Provide visual feedback that URL was copied
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';

                // Reset button text after 2 seconds
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            } catch (err) {
                // Fallback for browsers that don't support Clipboard API
                console.error('Failed to copy URL:', err);

                // Try alternative method
                const textArea = document.createElement('textarea');
                textArea.value = agentUrl;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();

                try {
                    document.execCommand('copy');
                    const originalText = copyButton.textContent;
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = originalText;
                    }, 2000);
                } catch (err2) {
                    console.error('Fallback copy failed:', err2);
                    copyButton.textContent = 'Failed';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                }

                document.body.removeChild(textArea);
            }
        });
    }

    // Close modal when clicking outside the modal content
    if (agentModal) {
        agentModal.addEventListener('click', (e) => {
            // Only close if clicking on the backdrop, not the modal content
            if (e.target === agentModal) {
                agentModal.classList.remove('active');
                agentModal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Handle keyboard navigation
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && agentModal && agentModal.classList.contains('active')) {
            agentModal.classList.remove('active');
            agentModal.setAttribute('aria-hidden', 'true');
        }
    });
});
