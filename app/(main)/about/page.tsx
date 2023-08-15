import Image from 'next/image'

export default function About() {
  return (
    <>
      <p>
        Hi! I'm Emily Xie, an undergraduate at CMU studying Information Systems and Computer Science. I love coding applications, both practical and for fun. My current technological interests include AI/ML, web development, and computer graphics.<br></br><br></br>In my free time, I generally listen to jazz albums or draw on my tablet.
      </p>
      <br></br>
      <br></br>
      <div style={{"position": "relative"}}>
        <Image 
          src="/img/headshot.jpg" 
          alt="me" 
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          />
      </div>
    </>
  )
}