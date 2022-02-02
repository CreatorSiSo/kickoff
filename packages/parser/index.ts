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
  // string = string.replace(/(?=<!--)([\s\S]*?)-->/g, '');

  const returnArray: {
    path: RegExpMatchArray | any[];
    start: number;
    end: number;
  }[] = [];

  //? TODO Raplace with: (?<={)([\s\S]*?)(?=}) ?
  for (let index = 0; index < string.length; index++) {
    // Parsing expressions
    // Start | Folder | End | Folder | End
    //   {   |  app   | :{  |  path  |  }
    if (string[index] === '{' && !(string[index + 1] === '}')) {
      const endIndex = string.indexOf('}', index);

      returnArray.push({
        path:
          string
            // Start | Folder | End | Folder | End
            //   {   |  app   | :{  |  path  |

            .slice(index, endIndex)
            // Start | Folder | End | Folder | End
            //       |  app   | :{  |  path  |

            .match(/(?<={)([\s\S]*?)(?=:{|$)/g) ?? [],
        //   Start | Folder | End | Folder | End
        //         |  app   |     |  path  |

        start: index,
        end: endIndex + 1,
      });

      index = endIndex;
    }
  }

  return returnArray;
}

declare interface String {
  splice(start: number, end: number, replacement: string): string;
}

String.prototype.splice = function (start, end, replacement) {
  return this.slice(0, start) + replacement + this.slice(end);
};

// const splitAt = (start: number, end: number) => (string: string) =>
//   [string.slice(0, start), string.slice(end)];

console.log(
  parseSync(html).map((path) => {
    return html.splice(path.start, path.end, path.path?.join('/'));
  })
);

// console.log(parseSync(expr));

// console.time('test');
// console.timeLog('test');
// for (let index = 0; index < 99999; index++) {
//   parseSync(html);
//   parseSync(expr);
// }
// console.timeEnd('test');
