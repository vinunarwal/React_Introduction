import React from 'react'

function History() {
    return (
        <>
            <div className='container'>
                <h1 className='history_heading text-center text-5xl font-bold'>React History</h1>

                <div className='row mt-6 flex flex-wrap-reverse justify-center items-center gap-3 pt-6 m-1'>
                    <div className='col-md-11 key_points p-4 relative text-lg bg-blue-100 history_box'>

                        <h2 className='text-xl text-red-400 font-semibold'>Key Points : </h2>
                        <p>✅ It was first used on Facebook's newsfeed in 2011.</p>
                        <p>✅ React was created by Jordan Walke, a software engineer at Facebook. </p>
                        <p>✅ React was open-sourced by Facebook in 2013.</p>
                        <hr className='m-4' />

                        <h2 className='px-2 text-red-400 text-3xl font-semibold'>Why React was created ? </h2>
                        <p>Back in 2011, the developers at Facebook started to face some issues with code maintenance. As the Facebook Ads app got an increasing number of features, the team needed more people to keep it running flawlessly. The growing number of team-members and app-features slowed them down as a company. Over time, their app became difficult to handle, as they faced a lot of cascading updates.</p>
                        
                        <p>After a while, engineers at Facebook couldn’t keep up with these cascading updates. Their code demanded an urgent upgrade to become more efficient.</p>
                       
                        <p>They had the model right, but they needed to do something about user experience. So, Jordan Walke built a prototype that made the process more efficient, and this marks the birth of React js.</p>

                    </div>                 
                </div>
            </div>
        </>
    )
}

export default History
