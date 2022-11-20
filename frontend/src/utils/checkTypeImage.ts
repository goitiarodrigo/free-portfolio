export const checkTypeImage = (image: string) => {
    const extensionAccepted = ['jpg', 'jpeg', 'pjp', 'pjpeg', 'png', 'jfif']
    
    const extension = image.slice(image.lastIndexOf('.') + 1)
    
    const isGood = extensionAccepted.some(el => el === extension)

    return isGood
}