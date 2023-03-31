import { Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

function GrammarCardAdditionalInfo(props) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipHitpael = `If the 1st root letter is צ, ס, ש or ז, the 2nd letter of prefix changes places with it.
  If the 1st root letter is צ, the 2nd letter of prefix (that is usually ת) becomes ט, and if the 1st root letter is
  ז, the 2nd letter of prefix becomes ד.`;

  const getAdditionalInfo = () => {
    if (props.binyan === "HITPA'EL")
      return (<Text m={2}>In this binyan squares represent not only root letters,
      but the second <Tooltip label={tooltipHitpael} isOpen={isTooltipOpen}>
     <b onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        onClick={() => setIsTooltipOpen(true)}>letter of a prefix</b>
   </Tooltip>, too (ט, ת or ד). </Text>);

   if ((props.binyan === "PA'AL") && (props.tense === "Future"))
      return(
        <>
          <Text m={2}>There are several exception words that belong to gizra EF'AL instead of EF'OL, for example:
            <b> לִלְמוֹד </b>(to study), <b>לִרְכַּב </b>(to ride), <b> לִלְבּוֹשׁ </b>(to put on), <b> לִשְׁכַּב </b>(to lie down),<b> לִגְדּוֹל </b>(to grow).</Text>
          <Text m={2}>In Future PA'AL there are a lot of other exception words with unusual forms, such as <b> יָכוֹל </b>(can),<b> לֶאֱכוֹל </b>(to eat),<b> לָתֵת </b>(to give),
            and so on.</Text>
        </>
      )

    return (<></>);
  }

  return (
    <div>
    {getAdditionalInfo()}
    </div>
  )
}

export default GrammarCardAdditionalInfo;
