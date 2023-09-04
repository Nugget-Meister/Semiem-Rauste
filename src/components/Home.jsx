import React, { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { parseMD } from './common/readWrite';

const Home = ({path}) => {

    const [activeMD, updateActiveMd] = useState('')

    console.log(path)

    useEffect(() => {
        parseMD(path ? `/data/${path}.md` : `/data/Home.md`,updateActiveMd)
        // console.log(path, file)
    }, [path])
    
    // console.log(thisThing)
    return (
        <>
            <ReactMarkdown>
                {activeMD}
            </ReactMarkdown>
        </>
    );
}

export default Home;
