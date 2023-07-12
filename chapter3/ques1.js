let obj = {
    harry:90,
    gurjot:80,
    ansh:99,
    ayushi:100}


    for (let i=0;i<Object.keys(obj).length;i++)
    {
        console.log("The marks of "+ Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]);
    }