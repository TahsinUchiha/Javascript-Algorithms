function convertHTML(str) {
    const htmlEntities = {"&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'":"&apos;"};
    console.log(Object.keys(htmlEntities))
    str.split("").forEach((e) => {
      if(Object.keys(htmlEntities).includes(e)) {
       str = str.replace(e,htmlEntities[e]) 
      }
    })
  
    return str;
  }

  