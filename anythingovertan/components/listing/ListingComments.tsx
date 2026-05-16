"use client";

import { useState } from "react";

import type { CommentItem, CommentThread } from "@/lib/listingPlaceholder";
import { PLACEHOLDER_LISTING } from "@/lib/listingPlaceholder";

function cloneThreads(threads: readonly CommentThread[]): CommentThread[] {
  return threads.map((t) => ({
    ...t,
    root: { ...t.root },
    sellerReply: t.sellerReply ? { ...t.sellerReply } : undefined,
  }));
}

function CommentBlock({ c, reply }: { c: CommentItem; reply?: boolean }) {
  const isSeller = c.role === "seller";
  const isSelf = c.avatar === "You";
  return (
    <div
      className={
        "flex gap-4 px-6 py-5 sm:px-10 " +
        (reply ? "border-t border-[var(--border)] bg-[var(--cream)] sm:pl-[5.5rem]" : "")
      }
    >
      <div
        className={
          "flex size-[34px] shrink-0 items-center justify-center rounded-full border font-mono text-[10px] font-medium uppercase tracking-[0.05em] " +
          (isSeller
            ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
            : isSelf
              ? "border-[var(--tan)] bg-[var(--tan)] text-[var(--paper)]"
              : "border-[var(--border)] bg-[var(--cream)] text-[var(--ink-2)]")
        }
      >
        {c.avatar}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2.5">
          <span className="font-condensed text-[13px] font-bold tracking-[0.04em] text-[var(--ink)]">
            {c.name}
          </span>
          <span
            className={
              "rounded-sm px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] " +
              (isSeller
                ? "bg-[var(--ink)] text-[var(--paper)]"
                : "border border-[var(--border)] bg-[var(--cream)] text-[var(--ink-3)]")
            }
          >
            {isSeller ? "Seller" : "Community member"}
          </span>
          <span className="ml-auto font-mono text-[10px] text-[var(--ink-3)]">{c.time}</span>
        </div>
        <div className="mb-2 font-mono text-xs leading-[1.7] text-[var(--ink)]">{c.text}</div>
        <button
          type="button"
          className="bg-transparent p-0 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink-3)] transition-colors hover:text-[var(--tan)]"
        >
          Reply
        </button>
      </div>
    </div>
  );
}

export function ListingComments() {
  const cfg = PLACEHOLDER_LISTING.comments;
  const [threads, setThreads] = useState<CommentThread[]>(() => cloneThreads(cfg.threads));
  const [count, setCount] = useState<number>(cfg.initialCount);
  const [draft, setDraft] = useState("");
  const [rows, setRows] = useState(3);

  function postComment() {
    const text = draft.trim();
    if (!text) return;
    const newThread: CommentThread = {
      id: typeof crypto !== "undefined" ? crypto.randomUUID() : String(Date.now()),
      root: {
        id: "new",
        avatar: "You",
        name: "You",
        role: "community",
        time: "Just now",
        text,
      },
      awaitingSeller: true,
    };
    setThreads((prev) => [newThread, ...prev]);
    setCount((c) => c + 1);
    setDraft("");
    setRows(3);
  }

  return (
    <section className="border-b border-[var(--border)]">
      <div className="flex items-baseline justify-between border-b border-[var(--border)] px-6 py-8 pb-5 sm:px-10">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--ink-3)]">
          <span className="h-px w-[18px] shrink-0 bg-[var(--tan)]" aria-hidden />
          <span>Questions & comments</span>
          <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--cream)] px-1.5 py-px align-middle font-mono text-[9px] font-normal normal-case tracking-normal text-[var(--ink-2)]">
            {count}
          </span>
        </div>
        <a
          href={cfg.guidelinesHref}
          className="border-b border-[var(--border)] pb-px font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ink-3)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
        >
          Guidelines
        </a>
      </div>

      <div className="flex gap-4 border-b border-[var(--border)] bg-[var(--cream)] px-6 py-6 sm:px-10">
        <div className="flex size-[34px] shrink-0 items-center justify-center rounded-full border border-[var(--tan)] bg-[var(--tan)] font-mono text-[10px] font-medium uppercase tracking-[0.05em] text-[var(--paper)]">
          You
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onFocus={() => setRows(4)}
            onBlur={() => {
              if (!draft.trim()) setRows(3);
            }}
            rows={rows}
            placeholder="Ask the seller a question publicly — other buyers can see the answer too..."
            className="w-full resize-none border border-[var(--border-2)] bg-[var(--paper)] px-4 py-3 font-mono text-xs leading-relaxed text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-3)] focus:border-[var(--ink)]"
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] text-[var(--ink-3)]">
              Questions are public — the seller and community can respond.
            </span>
            <button
              type="button"
              onClick={postComment}
              className="shrink-0 bg-[var(--ink)] px-5 py-2 font-condensed text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--paper)] transition-colors hover:bg-[var(--rust)]"
            >
              Post question
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {threads.map((thread) => (
          <div key={thread.id} className="border-b border-[var(--border)] last:border-b-0">
            <CommentBlock c={thread.root} />
            {thread.sellerReply ? <CommentBlock c={thread.sellerReply} reply /> : null}
            {thread.sellerReply ? null : thread.awaitingSeller ? (
              <div className="border-t border-[var(--border)] bg-[var(--cream)] py-3 pl-6 font-mono text-[10px] uppercase italic tracking-[0.08em] text-[var(--ink-3)] sm:pl-[5.5rem] sm:pr-10">
                Awaiting seller response
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
