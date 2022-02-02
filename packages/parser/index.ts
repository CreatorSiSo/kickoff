const html = `
<!DOCTYPE html>
<html class="no-js" lang="de">
  <head>
    {app:{head:{default}}}

    <title>SchillerGarten - Start</title>
  </head>

  <body>
    <div hidden>
      {app:{head:{icons}}}
      <!--  -->
      {app:{video-player:{video-controls}}}
    </div>

    {app:{sitemap}}
    <!--  -->
    {app:{image-viewer}}
    <!--  -->
    {app:{header}}
    <!--  -->
    {app:{backdrop}}

    <main>
      {app:{slider:{hero-slider}}}
      <!--  -->
      {app:{quick-start-nav}}
      <!--  -->
      {app:{content-section:{news-events}}}
      <!--  -->
      {app:{content-section:{ice}}}
      <!--  -->
      {app:{content-section:{news-events}}}
      <!--  -->
      {app:{content-section:{ice}}}




      {app:{content-section:{news-events}}}




      {app:{content-section:{ice}}}




      {app:{content-section:{news-events}}}




      {app:{content-section:{ice}}}
        -->
      {app:{content-section:{news-events}}}
      <!--  -->
      {app:{content-section:{ice}}}
      <!--  -->
      {app:{content-section:{activities}}}
    </main>

    {app:{footer}}
    <!--
    {app:{scroll-to-top}}
  </body>
</html>

<!DOCTYPE html>
<html lang="en">
  <head>-->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    {sdlfhh:{}
    <div>
      :{sduhsfhui}
      <section>{app:{test:{test}}}</section>
      <section>{app:{test}}</section>
      <!--

		<section>{app:{comp:{}}}</section>

		<button></button>
		-->
    </div>
  </body>
</html>
`;

const expr = '{ioduf:{idasf:{sduigfuisdf:{dsifgh}}}}';

function parseSync(string: string) {
  // Remove all html comments
  string = string.replace(/(?=<!--)([\s\S]*?)-->/g, '');

  const returnArray: {
    path: RegExpMatchArray | null;
    start: number;
    end: number;
  }[] = [];

  //? TODO Raplace with: (?<={)([\s\S]*?)(?=}) ?
  for (let index = 0; index < string.length; index++) {
    // Parsing expressions
    // Start | Folder | End | Folder | End
    //   {   |  app   | :{  |  path  |  }
    if (string[index - 1] === '{' && !(string[index + 1] === '}')) {
      const endIndex = string.indexOf('}', index);

      returnArray.push({
        path: string
          // Start | Folder | End | Folder | End
          //       |  app   | :{  |  path  |

          .slice(index, endIndex)
          // Start | Folder | End | Folder | End
          //       |  app   | :{  |  path  |

          .match(/(?<=^)([\s\S]*?)(?=[:{]|$)/g),
        //   Start | Folder | End | Folder | End
        //         |  app   |     |  path  |

        start: index,
        end: endIndex,
      });
    }
  }

  return returnArray;
}

console.log(parseSync(html));
console.log(parseSync(expr));
