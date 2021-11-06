

document.getElementById('postit-textBtn').onclick = function () {
    document.getElementById('postitTextarea').setAttribute('style','display:block');
    document.getElementById('postitImageUpload').setAttribute('style','visibility:hidden');
}

document.getElementById('postit-imageBtn').onclick = function () {
    document.getElementById('postitImageUpload').setAttribute('style','visibility:visible');
    document.getElementById('postitTextarea').setAttribute('style','display:none');
}

document.getElementById('remove-image').onclick = function () {
    document.getElementById('display-img').setAttribute('src','');
    document.getElementById('image-div').setAttribute('style','visibility:hidden')
    document.getElementById('content-buttons').setAttribute('style','display:flex');
    document.getElementById('postitImageUpload').setAttribute('style','visibility:visible');
}

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dtn7bi3w0',
    uploadPreset: 'fyn6gmmw',
    sources: ['local', 'camera', 'url', 'instagram', 'facebook'],
    styles: {
        palette: {
            window: "#000000",
            windowBorder: "#90A0B3",
            tabIcon: "#FFFFFF",
            menuIcons: "#FFFFFF",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#055052",
            action: "#FF620C",
            inactiveTabIcon: "#345B63",
            error: "#F44235",
            inProgress: "#D4ECDD",
            complete: "#20B832",
            sourceBg: "#000000"
        },
    }
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        
        document.getElementById('display-img').setAttribute('src',result.info.url)
        document.getElementById('image-div').setAttribute('style','visibility:visible;')
        document.getElementById('postitValue').setAttribute('style','visibility:visible')
        document.getElementById('postitImageUpload').setAttribute('style','visibility:hidden')
        document.getElementById('content-buttons').setAttribute('style','display:none')
        

        imageID = result.info.url;
    }
})



document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open()


}, false)



