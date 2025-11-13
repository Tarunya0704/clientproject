/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light': '#3B82F6',
        'dark': '#3B82F6',
        'grey': '#3B82F6',
        'secondary': '#3B82F6',
        'black50': '#3B82F6',
        'black100': '#3B82F6',
        'secondarycolor': '#3B82F6',
        'rectangle547': '#ffffff',
        'importantguidelinesforthetaskpleaseadheretothefollowingruleswhileworkingonthetaskfigmacommentsdonotusefigmacommentsforsharingnumbersorfeedbackifyoudowewillhavetoreportitcontactonlycontactusviaemailorphoneifyouhavequestionsabouttheassignmentpleasedonotrequesteditaccessasitwillnotbegrantedthisassignmentcanbecompletedwithviewonlyaccessmobileviewdesignwewillnotprovideadesignformobileviewyouareexpectedtoimplementitbasedonyourownworkpixelperfectionensurethetaskispixelperfectaccordingtothegivendesignbonuspointswillbeawardedforadditionalfunctionalitieslikeanimationsandothersmalldetailslighthousescorethesiteshouldhavealighthousescoreof95orhigherusethefollowinglinktocheckthescorehttpspagespeedwebdevdonotaskorrequestforeditaccessthankyouforyourattentiontotheseguidelines': '#000000',
        'contentmanagement': '#f9f9f9',
      },
    },
  },
  plugins: [],
}
