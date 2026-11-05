import avatarImg from './assets/avatar.png'
import './App.css'
import { AlarmClockCheck, Bot, Check, FileQuestionMark, HandCoins, Info, Link, MessageCircleQuestionMark } from 'lucide-react'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={avatarImg} className="base avatarImg" width="170" height="179" alt="" />
        </div>
        <div>
          <h1 className='icon-text-wrapper'><Bot width={80} height={80} />RoleDroid</h1>
          <p>
            無料で使えるシンプルなロールパネルBot
          </p>
          <div className='buttons'>
            <a href='https://discord.com/oauth2/authorize?client_id=1362050909965652049' className='button inviteMe icon-text-wrapper'><Link />招待する</a>
            <a href='https://discord.gg/SEx7yZZz6x' className='button support icon-text-wrapper'><MessageCircleQuestionMark />サポートサーバー</a>
          </div>
        </div>
      </section><br/>

      <section id="center">
        <div>
          <h2 className='icon-text-wrapper'><FileQuestionMark />なぜRoleDroidなのか？</h2>
          <div className='box'>
            <h4 className='icon-text-wrapper'><HandCoins />1. 無料だから</h4>
            <p>RoleDroidは基本的に無料であるため、<br/>料金を気にせず使用できます。</p>
          </div>
          <div className='box'>
            <h4 className='icon-text-wrapper'><Info />2. シンプルだから</h4>
            <p>RoleDroidはシンプルなBotなため、<br/>使い方を間違える心配はありません。</p>
          </div>
          <div className='box'>
            <h4 className='icon-text-wrapper'><AlarmClockCheck />3. 基本的に24時間稼働だから</h4>
            <p>RoleDroidは24時間稼働するため、<br/>Botが使えなくなる可能性が少ないです。</p>
          </div><br/>
          <h2 className='icon-text-wrapper'><Check />今すぐ招待しよう！</h2>
          <div className='buttons'>
            <a href='https://discord.com/oauth2/authorize?client_id=1362050909965652049' className='button inviteMe icon-text-wrapper'><Link />招待する</a>
          </div>
        </div>
      </section><br/>

      <span>Copyright© 2026<br/>
RoleDroid All rights reserved.</span>
    </>
  )
}

export default App
