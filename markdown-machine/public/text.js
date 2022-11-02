const text =
  "#WelcometomyReactMarkdownPreviewer!##Thisisasub-heading...###Andhere'ssomeothercoolstuff:Heressomecode,`<div></div>`,between2backticks.```//thisismulti-linecode:functionanotherExample(firstLine,lastLine){if(firstLine=='```'&&lastLine=='```'){returnmultiLineCode;}}```Youcanalsomaketext**bold**...whoa!Or_italic_.Or...waitforit...**_both!_**Andfeelfreetogocrazy~~crossingstuffout~~.There'salso[links](https://www.freecodecamp.org),and>BlockQuotes!Andifyouwanttogetreallycrazy,eventables:WildHeader|CrazyHeader|AnotherHeader?------------|-------------|-------------Yourcontentcan|behere,andit|canbehere....Andhere.|Okay.|Ithinkwegetit.-Andofcoursetherearelists.-Somearebulleted.-Withdifferentindentationlevels.-Thatlooklikethis.1.Andtherearenumberedliststoo.1.Usejust1sifyouwant!1.Andlastbutnotleast,let'snotforgetembeddedimages:![freeCodeCampLogo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

export default getText = () => {
  return text;
};
