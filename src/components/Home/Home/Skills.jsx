import { useEffect, useState } from "react";


const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('skill.json')
            .then(response => response.json())
            .then(data => {
                setSkills(data);
            })
            .catch(error => {
                console.error('Error fetching skill data:', error);
            });
    }, []);

    console.log(skills);
    return (
        <div>
            
        </div>
    );
};

export default Skills;