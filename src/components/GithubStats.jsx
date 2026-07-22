function GithubStats() {
  return (
    <section className="github-stats" id="github" data-aos="fade-up">
      <h2>GitHub Statistics</h2>

      <div className="github-images">
        <img
          src="https://github-readme-stats.vercel.app/api?username=amosopiyo994-prog&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=amosopiyo994-prog&layout=compact&theme=tokyonight"
          alt="Top Languages"
        />
      </div>
    </section>
  );
}

export default GithubStats;