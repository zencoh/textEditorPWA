const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    const stashPrompt = event;
    const installButton = document.getElementById('install-button');
    installButton.addEventListener('click', () => {
        stashPrompt.prompt();
        stashPrompt.choice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('user installed prompt');
            } else {
                console.log('user declined install prompt')
            }
            // reset stashed prompt to null
            stashPrompt = null;
        })
    })
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
