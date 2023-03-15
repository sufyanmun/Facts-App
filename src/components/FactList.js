function FactList() {
  return (
    <section>
      <ul>
        <li class="facts-List">
          <p>
            React is being developed by Meta (formerly facebook){" "}
            <a
              class="source"
              href="https://opensource.fb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Source)
            </a>
          </p>
          <span class="technology-Tag-Span">Technology</span>
          <div class="voting-Btns">
            <button>👍 33</button>
            <button>🤯 11</button>
            <button>📛 2</button>
          </div>
        </li>

        <li class="facts-List">
          <p>
            "Millennial dads spend 3 times as much time with their kids than
            their fathers spent with them. In 1982, 43% of fathers had never
            changed a diaper. Today, that number is down to 3%"{" "}
            <a
              class="source"
              href="https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Source)
            </a>{" "}
          </p>
          <span class="society-Tag-Span">Society</span>
          <div class="voting-Btns">
            <button>👍 33</button>
            <button>🤯 11</button>
            <button>📛 2</button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FactList;
