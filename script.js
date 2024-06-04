const mousePointer = document.querySelector('.mouse-pointer');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    mousePointer.style.transform = `translate(${x}px, ${y}px)`;
}); 