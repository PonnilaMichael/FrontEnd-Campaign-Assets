const main = () => {
   let tagging = process.argv[2];
   console.log(tagging.split("-")[1]);
}

main();