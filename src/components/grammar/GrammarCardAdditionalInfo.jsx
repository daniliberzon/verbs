import { Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';

function GrammarCardAdditionalInfo(props) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipHitpael = `If the 1st root letter is צ, ס, ש or ז, the 2nd letter of prefix changes places with it.
  If the 1st root letter is צ, the 2nd letter of prefix (that is usually ת) becomes ט, and if the 1st root letter is
  ז, the 2nd letter of prefix becomes ד.`

  return (
    <div>
    {props.binyan === "HITPA'EL" ? <Text m={2}>In this binyan squares represent not only root letters,
         but the second <Tooltip label={tooltipHitpael} isOpen={isTooltipOpen}>
        <b onMouseEnter={() => setIsTooltipOpen(true)}
           onMouseLeave={() => setIsTooltipOpen(false)}
           onClick={() => setIsTooltipOpen(true)}>letter of a prefix</b>
      </Tooltip>, too (ט, ת or ד). </Text> : <></>}
    </div>
  )
}

export default GrammarCardAdditionalInfo;
