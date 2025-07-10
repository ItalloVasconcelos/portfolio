import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../constants/info";


export default function About() {
    const firstName = info.firstName

    function aboutMeText() {
        return <>
            <span className={Style.green}>{firstName}@{firstName}-PC:<span >~$cat {firstName} about<span className={Style.move}>|</span></span><p >{info.bio}</p>
            </span>
        </>;
    }

    function skillsText() {
        return <>
            <span className={Style.green}>{firstName}@{firstName}-PC:<span >~$ls {firstName} skills/knowledge<span className={Style.move}>|</span></span><p ></p>
            </span>
            <p style={{ color: info.baseColor }}> proficiency with</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> studying
            </p>
            <ul>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> soft skills
            </p>
            <ul>
                {info.skills.softSkills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    // function miscText() {
    //     return <>
    //         <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName} $</span> cd
    //             hobbies/interesses</p>
    //         <p><span style={{ color: info.baseColor }}>hobbies/interesses <span
    //             className={Style.green}>(main)</span> $</span> ls</p>
    //         <ul>
    //             {info.hobbies.map((hobby, index) => (
    //                 <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
    //             ))}
    //         </ul>
    //     </>;
    // }

    return (
        <>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
                {/* <Box width={{ xs: "80%", md: "50%" }} marginBottom={"1rem"} fontSize={'2.5rem'}>About</Box> */}
                <Terminal text={aboutMeText()} />
                <Terminal text={skillsText()} />
                {/* <Terminal text={miscText()} /> */}
            </Box></>

    )
}