"use client";

import { getLabTerminalLines, labOpenTargets } from "@/lib/lab";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const OPEN_EVENT = "portfolio:open-terminal";

export function openTerminal() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const PROMPT = "guest@lefkos.dev:~$";

type Line = {
  type: "input" | "output" | "error";
  text: string;
};

const WELCOME: Line[] = [
  { type: "output", text: "LEFKOS_OS v2.0: guest session established." },
  { type: "output", text: "type 'help' for available commands." },
];

const FILES: Record<string, string[]> = {
  "about.txt": [
    "React and TypeScript developer, promoted to frontend lead",
    "within a year of joining Odyssey Cybersecurity.",
    "Rebuilt enterprise platforms from Ext.NET to React.",
    "Shipped modular Angular systems from the ground up.",
  ],
  "stack.txt": [
    "CORE     :: TYPESCRIPT, REACT, ANGULAR, NEXT.JS",
    "PLATFORM :: NODE.JS, EXPRESS, REST, WEBSOCKETS, TAILWIND",
    "DELIVERY :: DESIGN_SYSTEMS, UNIT_TESTING, GIT, CI/CD, PWA",
  ],
  "experience.log": [
    "[2026] ODYSSEY CYBERSECURITY :: Lead Software Developer (Frontend)",
    "[2025] ODYSSEY CYBERSECURITY :: Software Developer (Frontend)",
    "[2022] MEDLO                 :: Frontend Developer",
    "[2018] PRIMOTHEPLUG          :: Owner",
  ],
  "contact.txt": [
    "EMAIL  :: paplefkos@gmail.com",
    "GITHUB :: github.com/lefkosp",
    "send a signal. Response time is usually < 24h.",
  ],
  "decisions.log": [
    "ADR-001 :: LLM calls belong behind a backend, not in the browser",
    "ADR-002 :: Cache AI generations: staleness is a feature",
    "ADR-003 :: AI scaffolds discover the product, they don't ship it",
    "ADR-004 :: In a hackathon, fake the familiar, build the differentiator",
    "ADR-005 :: One declarative API beats fifteen flexible components",
    "",
    "full records :: 'open decision-log'",
  ],
  "lab.log": getLabTerminalLines(),
};

const SECTION_TARGETS: Record<string, string> = {
  home: "/",
  about: "/#about",
  experience: "/#experience",
  work: "/#work",
  lab: "/#lab",
  decisions: "/#decisions",
  "decision-log": "/decisions",
  contact: "/#contact",
};

const EXTERNAL_TARGETS: Record<string, string> = labOpenTargets;

const OPEN_TARGETS = [
  ...Object.keys(SECTION_TARGETS),
  ...Object.keys(EXTERNAL_TARGETS).filter((key) => !SECTION_TARGETS[key]),
  "cv.pdf",
];

const COMMANDS = [
  "help",
  "ls",
  "cat",
  "open",
  "whoami",
  "pwd",
  "date",
  "clear",
  "exit",
];

const HELP: string[] = [
  "AVAILABLE_COMMANDS:",
  "  help           show this list",
  "  ls             list files",
  "  cat <file>     print file contents",
  `  open <target>  navigate :: ${OPEN_TARGETS.join(" ")}`,
  "  whoami         current user",
  "  pwd            working directory",
  "  date           current timestamp",
  "  clear          clear screen",
  "  exit           close terminal",
  "",
  "TAB completes, ↑/↓ recall history, ESC closes.",
];

export function Terminal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    const handleOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(OPEN_EVENT, handleOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [lines, isOpen]);

  const run = useCallback(
    (rawInput: string) => {
      const trimmed = rawInput.trim();
      const echo: Line = { type: "input", text: trimmed };

      if (!trimmed) {
        setLines((prev) => [...prev, echo]);
        return;
      }

      setHistory((prev) =>
        prev[prev.length - 1] === trimmed ? prev : [...prev, trimmed],
      );
      setHistoryIndex(-1);

      const [command, ...args] = trimmed.split(/\s+/);
      const arg = args.join(" ");
      const print = (output: string[], type: Line["type"] = "output") => {
        setLines((prev) => [
          ...prev,
          echo,
          ...output.map((text) => ({ type, text })),
        ]);
      };

      switch (command) {
        case "help":
          print(HELP);
          break;
        case "ls":
          print([
            "about.txt  stack.txt  experience.log  lab.log  decisions.log  contact.txt  cv.pdf",
          ]);
          break;
        case "cat": {
          if (!arg) {
            print(["usage: cat <file>"], "error");
          } else if (arg === "cv.pdf") {
            print([`cat: ${arg}: binary file. Try 'open cv.pdf'`], "error");
          } else if (FILES[arg]) {
            print(FILES[arg]);
          } else {
            print([`cat: ${arg}: no such file`], "error");
          }
          break;
        }
        case "open": {
          if (!arg) {
            print(["usage: open <target>"], "error");
          } else if (arg === "cv.pdf") {
            print(["opening cv.pdf ..."]);
            window.open("/cv.pdf", "_blank");
          } else if (SECTION_TARGETS[arg]) {
            print([`navigating to ${arg} ...`]);
            setIsOpen(false);
            router.push(SECTION_TARGETS[arg]);
          } else if (EXTERNAL_TARGETS[arg]) {
            print([`opening ${arg} ...`]);
            window.open(EXTERNAL_TARGETS[arg], "_blank");
          } else {
            print([`open: ${arg}: unknown target`], "error");
          }
          break;
        }
        case "whoami":
          print(["guest"]);
          break;
        case "pwd":
          print(["/home/guest/lefkos.dev"]);
          break;
        case "date":
          print([new Date().toString()]);
          break;
        case "clear":
          setLines([]);
          break;
        case "exit":
        case "quit":
          setIsOpen(false);
          break;
        case "sudo":
          print(["permission denied: nice try."], "error");
          break;
        case "vim":
        case "nano":
        case "emacs":
          print([`${command}: read-only filesystem. nothing to edit here.`], "error");
          break;
        case "rm":
          print(["rm: operation not permitted: this portfolio is immutable."], "error");
          break;
        default:
          print(
            [`command not found: ${command}. type 'help' for commands.`],
            "error",
          );
      }
    },
    [router],
  );

  const completeInput = useCallback(() => {
    const parts = input.split(/\s+/);
    const isFirstToken = parts.length <= 1;
    const partial = parts[parts.length - 1] ?? "";
    if (!partial) return;

    const pool = isFirstToken
      ? COMMANDS
      : parts[0] === "cat"
        ? Object.keys(FILES).concat("cv.pdf")
        : parts[0] === "open"
          ? OPEN_TARGETS
          : [];
    const matches = pool.filter((candidate) => candidate.startsWith(partial));

    if (matches.length === 1) {
      setInput([...parts.slice(0, -1), matches[0]].join(" "));
    } else if (matches.length > 1) {
      setLines((prev) => [
        ...prev,
        { type: "output", text: matches.join("  ") },
      ]);
    }
  }, [input]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      run(input);
      setInput("");
    } else if (event.key === "Tab") {
      event.preventDefault();
      completeInput();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (history.length === 0) return;
      const nextIndex =
        historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Terminal"
      className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative flex w-full max-w-2xl flex-col border border-surface-variant bg-surface-container-lowest">
        <div className="flex items-center justify-between gap-4 border-b border-surface-variant px-4 py-3 font-mono text-technical-mono">
          <span className="truncate text-accent">
            TERMINAL // GUEST_SESSION
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="shrink-0 text-outline transition-colors duration-150 hover:text-accent"
          >
            ESC
          </button>
        </div>

        <div
          ref={scrollRef}
          className="max-h-[50vh] min-h-72 cursor-text overflow-y-auto p-4 font-mono text-technical-mono"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className={
                line.type === "input"
                  ? "mt-2 text-foreground"
                  : line.type === "error"
                    ? "whitespace-pre-wrap text-error"
                    : "whitespace-pre-wrap text-on-surface-variant"
              }
            >
              {line.type === "input" ? (
                <>
                  <span className="text-accent">{PROMPT}</span> {line.text}
                </>
              ) : (
                line.text || "\u00A0"
              )}
            </div>
          ))}

          <div className="mt-2 flex items-center gap-2">
            <label htmlFor="terminal-input" className="shrink-0 text-accent">
              {PROMPT}
            </label>
            <input
              ref={inputRef}
              id="terminal-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleInputKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label="Terminal command input"
              className="w-full bg-transparent font-mono text-technical-mono text-foreground caret-accent focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
