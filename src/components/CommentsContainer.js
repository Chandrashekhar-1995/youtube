import React from 'react'
import userIcon from "../static/userIcon.png";


const commentData = [
  {
    name: "Chandra Shekhar",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    replies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        eplies: [
          {
            name: "Aman",
            comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
            eplies: [
              {
                name: "Manoj",
                comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                eplies: [
                  {
                    name: "Aman",
                    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                    eplies: [
                      {
                        name: "Manoj",
                        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                        eplies: [
                          {
                            name: "Aman",
                            comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                            eplies: [
                              {
                                name: "Manoj",
                                comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                                eplies: [
                                  
                                ]
                              },
                            ]
                          },
                        ]
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Manoj",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    eplies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        eplies: [
          
        ]
      },
    ]
  },
  {
    name: "Amit",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    eplies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        eplies: [
          
        ]
      },
    ]
  },
  {
    name: "Chirag",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    eplies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        eplies: [
          
        ]
      },
    ]
  },
  {
    name: "Guddu",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    eplies: [
      
    ]
  },
  {
    name: "Aman",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    eplies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        eplies: [
          
        ]
      },
    ]
  },
  {
    name: "Chandra Shekhar",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd"
  },
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
      <img alt="user" src={userIcon} className=" w-8 h-8" />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{ comment}</p>
      </div>
    </div>
  )
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comment</h1>
      <Comment data={commentData[0]}  />
    </div>
  )
}

export default CommentsContainer;