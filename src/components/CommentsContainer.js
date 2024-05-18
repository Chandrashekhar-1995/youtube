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
        replies: [
          {
            name: "Aman",
            comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
            replies: [
              {
                name: "Manoj",
                comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                replies: [
                  {
                    name: "Aman",
                    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                    replies: [
                      {
                        name: "Manoj",
                        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                        replies: [
                          {
                            name: "Aman",
                            comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                            replies: [
                              {
                                name: "Manoj",
                                comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                                replies: [
                                  
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
    replies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        replies: [
          
        ]
      },
    ]
  },
  {
    name: "Amit",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    replies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        replies: [
          
        ]
      },
    ]
  },
  {
    name: "Chirag",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    replies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        replies: [
          
        ]
      },
    ]
  },
  {
    name: "Guddu",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    replies: [
      
    ]
  },
  {
    name: "Aman",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    replies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        replies: [
          
        ]
      },
    ]
  },
  {
    name: "Chandra Shekhar",
    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
    replies: [
      {
        name: "Manoj",
        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
        replies: [
          {
            name: "Aman",
            comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
            replies: [
              {
                name: "Manoj",
                comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                replies: [
                  {
                    name: "Aman",
                    comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                    replies: [
                      {
                        name: "Manoj",
                        comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                        replies: [
                          {
                            name: "Aman",
                            comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                            replies: [
                              {
                                name: "Manoj",
                                comment: " Lorem Ipsum Dervife jhghdsfah kjhdsf kjhfd",
                                replies: [
                                  
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
];

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img alt="user" src={userIcon} className=" w-8 h-8" />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  )
};


const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.name}>
          <Comment data={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <div className='pl-5 border border-l-black ml-5'>
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comment</h1>
      <CommentList comments={commentData} />
    </div>
  )
};

export default CommentsContainer;