"use server"

import React from 'react'
import LoadingUserRow from '@/components/LoadingUserRow/LoadingUserRow'

const Loading: React.FC = () => {
    return (
        <div>
            <div>USERS</div>
            <LoadingUserRow/>
            <LoadingUserRow/>
            <LoadingUserRow/>
            <LoadingUserRow/>
        </div>
    );
};

export default Loading;
