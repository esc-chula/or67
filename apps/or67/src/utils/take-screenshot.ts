export async function takeScreenshot(node: HTMLElement): Promise<string> {
    window.scrollTo(0, 0);
    const { default: html2canvas } = await import('html2canvas');
    const canvas = await html2canvas(node, {
        useCORS: true,
        allowTaint: false,
        scale: 2,
        windowWidth: node.scrollWidth + 64,
        windowHeight: node.scrollHeight,
    });
    const croppedCanvas = document.createElement('canvas');
    const croppedCanvasContext = croppedCanvas.getContext('2d');
    if (croppedCanvasContext === null) {
        throw new Error('Canvas context is null');
    }

    const cropPositionTop = 0;
    const cropPositionLeft = 0;
    const cropWidth = canvas.width;
    const cropHeight = canvas.height;

    croppedCanvas.width = cropWidth;
    croppedCanvas.height = cropHeight;

    croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

    return croppedCanvas.toDataURL();
}
