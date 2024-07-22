// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');

    // Ensure the video is ready to play
    video.addEventListener('loadedmetadata', () => {
        const videoDuration = video.duration;

        // Create the GSAP timeline
        gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: (self) => {
                    // Calculate the video playback time based on scroll position
                    const scrollPosition = self.progress * videoDuration;
                    video.currentTime = scrollPosition;
                }
            }
        });
    });
});
