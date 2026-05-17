import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const BOOT_MSGS = [
  { line: '[    0.000000] Linux version 6.6.1-arch1-1 (brian@archlinux) (gcc (GCC) 13.2.1) #1 SMP PREEMPT_DYNAMIC', delay: 120 },
  { line: '[    0.010000] Command line: BOOT_IMAGE=/vmlinuz-linux root=UUID=brian-nguyen ro quiet', delay: 80 },
  { line: '[    0.020000] x86/fpu: Supporting XSAVE feature 0x001: \'x87 floating point registers\'', delay: 60 },
  { line: '[    0.030000] CPU: Full-stack Developer detected (family: React, model: 18.x, stepping: 6)', delay: 100 },
  { line: '[    0.035000] CPU: Frontend capabilities: [react] [tailwind] [vite] [html] [css] [javascript]', delay: 80 },
  { line: '[    0.040000] CPU: Backend capabilities: [node] [python] [express] [django] [postgresql] [mysql]', delay: 80 },
  { line: '[    0.045000] CPU: Systems capabilities: [c] [java] [git] [docker] [linux]', delay: 80 },
  { line: '[    0.050000] Memory: 16384MB — dedicated to creative problem solving & late-night debugging', delay: 100 },
  { line: '[    0.060000] Kernel: Loaded personality \'INTERACTIVE_WEB\' — interactive web specialist', delay: 80 },
  { line: '', delay: 40 },
  { line: '[  OK  ] Loaded initial ramdisk: brian.nguyen.resume.img', delay: 60 },
  { line: '[  OK  ] Mounted /dev/education on /uvic — B.S.Eng Software Engineering', delay: 100 },
  { line: '[  OK  ] Started udev Kernel Device Manager — hot-plugging new skills', delay: 80 },
  { line: '[  OK  ] Loaded kernel module: react_core.ko (v18.x + hooks pipeline)', delay: 120 },
  { line: '[  OK  ] Loaded kernel module: node_engine.ko (v20 LTS)', delay: 90 },
  { line: '[  OK  ] Loaded kernel module: python_interpreter.ko (v3.12)', delay: 90 },
  { line: '[  OK  ] Loaded kernel module: ml_models.ko (PyTorch, scikit-learn)', delay: 100 },
  { line: '[  OK  ] Loaded kernel module: c_compiler.ko (GCC 13 + systems programming)', delay: 100 },
  { line: '[  OK  ] Started React Render Daemon — serving UI components', delay: 80 },
  { line: '[  OK  ] Mounted filesystem: /projects/game-of-life (JavaScript + p5.js)', delay: 90 },
  { line: '[  OK  ] Mounted filesystem: /projects/blackjack-agent (C + Q-learning)', delay: 90 },
  { line: '[  OK  ] Mounted filesystem: /projects/lim-scraper (Python + Selenium + Deepseek R1)', delay: 100 },
  { line: '[  OK  ] Mounted filesystem: /projects/drawing-with-ai (ML + Computer Vision)', delay: 90 },
  { line: '[  OK  ] Started PostgreSQL 16 — database engine ready', delay: 80 },
  { line: '[  OK  ] Started SSH Agent — brian.nguyen@impact.com', delay: 120 },
  { line: '[  OK  ] Started Portfolio Web Server (React + Vite build pipeline)', delay: 100 },
  { line: '[  OK  ] Established secure connection: brianguyen.me', delay: 100 },
  { line: '[  OK  ] System integrity verified — no bugs found', delay: 120 },
  { line: '[  OK  ] Reachable target: Multi-User Environment (team player detected)', delay: 100 },
  { line: '[  OK  ] Reached target: Graphic Interface — display manager ready', delay: 80 },
  { line: '', delay: 60 },
  { line: '[  OK  ] Startup finished in 3.452s (kernel) + 1.891s (userspace) = 5.343s', delay: 200 },
  { line: '', delay: 80 },
]

const HIRING_REASONS = [
  '[1/8] Frontend abilities: React, Tailwind, Vite, HTML5, CSS3, Javascript — I am genuinely passionate about design, and building good UI/UX',
  '[2/8] Full-stack capable: Node.js, Express, Python, PostgreSQL — Backend development is what I started on so I am fluent in full-stack apps',
  '[3/8] Low-level tinkering: C, systems programming, Linux internals — I like to work with low level languages, and tinker with hardware',
  '[4/8] Self-starter: built a UVic co-op portal scraper with automated Ai matcher — Automated my own job search',
  '[5/8] ML curious: Blackjack agent (Q-learning), hand tracking (CV) — I have experience building with AI tools, and developing niche AI projects',
  '[6/8] Software Engineering student @ UVic — grinding algorithms, data structures, and architecture',
  '[7/8] Git + CI/CD fluent — I am comfortable using git through usage in my personal, and academic projects.',
  '[8/8] I am curious, I am technical, I am looking for a co-op. Hire me? ⟵ Press ENTER to accept',
]

const REVEAL_CLOSING = [
  '',
  '╔══════════════════════════════════════════════════════════════╗',
  '║  IMPACT FRONTEND INTERNSHIP — RECRUITER ACCESS GRANTED       ║',
  '║                                                              ║',
  '║  Brian Nguyen                                                ║',
  '║  brianguyen.me                                               ║',
  '║  github.com/briannguyen03                                    ║',
  '║  nguyen.brian1403@gmail.com                                  ║',
  '║                                                              ║',
  '║  I look forward to discussing more about my qualifications!  ║',
  '║                                                              ║',
  '╚══════════════════════════════════════════════════════════════╝',
  '',
  '[SESSION TERMINATED]',
  '',
]

export default function ImpactFrontend() {
  // ── State ──
  const [phase, setPhase] = useState('booting')  // booting | login | prompt | qa | closing | done
  const [visibleLines, setVisibleLines] = useState([])
  const [blink, setBlink] = useState(true)
  const [inputLine, setInputLine] = useState('')
  const [initRevealed, setInitRevealed] = useState(false)
  const [qaIndex, setQaIndex] = useState(-1)
  const [closingIndex, setClosingIndex] = useState(-1)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)

  const navigate = useNavigate()

  const terminalRef = useRef(null)
  const containerRef = useRef(null)
  const bootTimers = useRef([])

  // ── Auto-scroll ──
  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    })
  }, [])

  // ── Blinking cursor ──
  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(id)
  }, [])

  // ── Auto-scroll after every content change ──
  useEffect(() => {
    requestAnimationFrame(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    })
  }, [visibleLines, phase])

  // ── Focus on mount ──
  useEffect(() => {
    if (containerRef.current) containerRef.current.focus()
  }, [])

  // ── Boot sequence ──
  useEffect(() => {
    if (phase !== 'booting') return

    const schedule = (i) => {
      if (i >= BOOT_MSGS.length) {
        setPhase('login')
        setShowLoginPrompt(true)
        scrollToBottom()
        return
      }
      const msg = BOOT_MSGS[i]
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, msg.line])
        scrollToBottom()
        schedule(i + 1)
      }, msg.delay)
      bootTimers.current.push(t)
    }
    schedule(0)
    return () => {
      bootTimers.current.forEach(clearTimeout)
      bootTimers.current = []
    }
  }, [phase, scrollToBottom])

  // ── Login simulation ──
  useEffect(() => {
    if (!showLoginPrompt) return

    const steps = [
      { delay: 300, line: '' },
      { delay: 600, line: 'Arch Linux 6.6.1-arch1-1 (tty1)' },
      { delay: 800, line: '' },
      { delay: 1000, line: 'brian-nguyen login: ' },
      { delay: 2500, line: 'brian.nguyen           [autologin]' },
      { delay: 3000, line: 'Password: ' },
      { delay: 4200, line: '********                [authenticated]' },
      { delay: 4500, line: '' },
      {
        delay: 5000,
        line: 'Last login: ' +
          new Date().toLocaleString('en-US', {
            weekday: 'short', month: 'short', day: '2-digit',
            hour: '2-digit', minute: '2-digit',
            timeZone: 'America/Vancouver'
          }) + ' PST from impact.com',
      },
      { delay: 5300, line: '' },
    ]

    const timers = steps.map(({ delay, line }) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
        scrollToBottom()
      }, delay)
    )

    const final = setTimeout(() => {
      setPhase('prompt')
      setInitRevealed(true)
      scrollToBottom()
    }, 5600)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(final)
    }
  }, [showLoginPrompt, scrollToBottom])

  // ── Closing animation ──
  useEffect(() => {
    if (phase !== 'closing') return
    if (closingIndex >= REVEAL_CLOSING.length) {
      setPhase('done')
      return
    }

    const t = setTimeout(() => {
      if (closingIndex >= 0) {
        setVisibleLines(prev => [...prev, REVEAL_CLOSING[closingIndex]])
       }
      setClosingIndex(i => i + 1)
      scrollToBottom()
    }, closingIndex === -1 ? 200 : 100)

    return () => clearTimeout(t)
  }, [phase, closingIndex, scrollToBottom])

  // ── Keyboard handler ──
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      navigate('/projects')
      return
    }

    if (e.key === 'Enter') {
      e.preventDefault()

      if (phase === 'prompt' && initRevealed) {
        setPhase('qa')
        setQaIndex(0)
        setVisibleLines(prev => [...prev, HIRING_REASONS[0]])
        scrollToBottom()
        return
      }

      if (phase === 'qa') {
        const next = qaIndex + 1
        if (next < HIRING_REASONS.length) {
          setQaIndex(next)
          setVisibleLines(prev => [...prev, HIRING_REASONS[next]])
          scrollToBottom()
        } else {
          setPhase('closing')
          setClosingIndex(-1)
        }
        return
      }

      // Generic shell handling
      if (inputLine.trim().toLowerCase() === 'clear') {
        setVisibleLines([])
        setInputLine('')
        return
      }
      if (inputLine.trim()) {
        setVisibleLines(prev => [...prev, '$ ' + inputLine])
        setInputLine('')
        scrollToBottom()
      }
    } else if (e.key === 'Backspace' && showInput) {
      setInputLine(prev => prev.slice(0, -1))
    } else if (e.key.length === 1 && showInput) {
      setInputLine(prev => prev + e.key)
    }
  }, [phase, initRevealed, qaIndex, inputLine, scrollToBottom])

  // ── Show prompt question line ──
  const isPromptActive = phase === 'prompt'
  const isQaActive = phase === 'qa'
  const showInput = phase !== 'booting' && phase !== 'login' && phase !== 'prompt' && phase !== 'qa' && phase !== 'closing'

  return (
    <div
      className="impact-terminal"
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Scanlines & vignette */}
      <div className="crt-scanlines" />
      <div className="crt-vignette" />

      {/* Title bar */}
      <div className="terminal-header">
        <span className="terminal-title">brian@arch:~ — impact.com_recruiter_access</span>
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
      </div>

      {/* Terminal body */}
      <div className="terminal-body" ref={terminalRef}>
        <div className="terminal-content">
          {visibleLines.map((line, i) => (
            <div key={i} className={'term-line' + (line.startsWith('[  OK  ]') ? ' ok-line' : '')}>
              {line}
            </div>
          ))}

          {/* Prompt question */}
          {(isPromptActive || isQaActive) && (
            <div className="prompt-block">
              <div className="prompt-question">
                <span className="prompt-prefix">[brian.nguyen@arch ~]$ </span>
                <span className="hack-text">why hire Brian Nguyen?</span>
              </div>

              {isQaActive && qaIndex < HIRING_REASONS.length - 1 && (
                <div className="prompt-hint">
                  &gt; Press <span className="key-hint">ENTER</span> for next reason{' '}
                  <span className={'cursor' + (blink ? '' : ' hidden')}>█</span>
                </div>
              )}

              {isPromptActive && (
                <div className="prompt-hint">
                  &gt; Press <span className="key-hint">ENTER</span> to reveal hiring insights{' '}
                  <span className={'cursor' + (blink ? '' : ' hidden')}>█</span>
                </div>
              )}
            </div>
          )}

          {/* Closing cursor */}
          {phase === 'closing' && (
            <span className={'cursor' + (blink ? '' : ' hidden')}>█</span>
          )}
          {phase === 'done' && (
            <div className="done-message">
              <br />
              <span className="done-text">[Press Ctrl+C to browse my projects →]</span>
              <br />
              <span className={'cursor' + (blink ? '' : ' hidden')}>█</span>
            </div>
          )}

          {/* Input line (shell mode) */}
          {showInput && phase !== 'qa' && phase !== 'prompt' && initRevealed && (
            <div className="shell-input">
              <span className="prompt-prefix">$ </span>
              <span>{inputLine}</span>
              <span className={'cursor' + (blink ? '' : ' hidden')}>█</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .impact-terminal {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #0a0a0a;
          color: #33ff33;
          font-family: 'Source Code Pro', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          outline: none;
        }

        .crt-scanlines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background: repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          );
        }

        .crt-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 14px;
          background: #1a1a2e;
          border-bottom: 1px solid #33ff33;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .terminal-title {
          font-size: 12px;
          color: #33ff33;
          opacity: 0.8;
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .terminal-body {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 14px 20px;
          position: relative;
          z-index: 2;
          scrollbar-width: thin;
          scrollbar-color: #33ff33 #0a0a0a;
        }

        .terminal-body::-webkit-scrollbar { width: 6px; }
        .terminal-body::-webkit-scrollbar-track { background: #0a0a0a; }
        .terminal-body::-webkit-scrollbar-thumb { background: #33ff33; border-radius: 3px; }

        .terminal-content { white-space: pre-wrap; word-break: break-word; }

        .term-line {
          min-height: 1.5em;
          margin-bottom: 1px;
        }

        .ok-line {
          color: #00ff88;
        }

        .prompt-block {
          margin-top: 10px;
        }

        .prompt-question {
          font-size: 16px;
          margin-bottom: 8px;
        }

        .prompt-prefix {
          color: #33ff33;
          opacity: 0.7;
        }

        .hack-text {
          color: #00ffaa;
          font-weight: bold;
          text-shadow: 0 0 10px rgba(0,255,170,0.6);
          animation: hack-pulse 2s ease-in-out infinite;
        }

        @keyframes hack-pulse {
          0%, 100% { text-shadow: 0 0 10px rgba(0,255,170,0.6); }
          50% { text-shadow: 0 0 20px rgba(0,255,170,1); }
        }

        .prompt-hint {
          color: #888;
          font-size: 13px;
        }

        .key-hint {
          display: inline-block;
          padding: 1px 7px;
          background: #33ff33;
          color: #0a0a0a;
          font-weight: bold;
          border-radius: 3px;
          font-size: 11px;
        }

        .shell-input {
          margin-top: 4px;
        }

        .cursor {
          font-size: 14px;
          color: #33ff33;
          margin-left: 2px;
          text-shadow: 0 0 10px rgba(51,255,51,0.9);
          animation: cursor-glow 1s ease-in-out infinite alternate;
        }

        @keyframes cursor-glow {
          from { text-shadow: 0 0 5px rgba(51,255,51,0.5); }
          to { text-shadow: 0 0 15px rgba(51,255,51,1); }
        }

        .cursor.hidden { opacity: 0; }

        .done-text {
          color: #666;
          font-style: italic;
        }

        .done-message {
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
}
