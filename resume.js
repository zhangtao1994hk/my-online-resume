addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>张 涛 Zhang Tao - SRE Resume</title>
      <style>
        body { font-family: sans-serif; line-height: 1.6; max-width: 800px; margin: auto; padding: 20px; background: #f4f4f4; }
        .card { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        h1 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        .tech-stack span { background: #007bff; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.9em; margin-right: 5px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Zhang Tao</h1>
        <p><strong>Site Reliability Engineer</strong></p>
        <div class="tech-stack">
          <span>Terraform</span><span>GKE</span><span>MySQL</span><span>Cloudflare</span>
        </div>
        <h2>个人简介</h2>
        <p>专注于云原生架构运维与自动化工具开发，拥有丰富的 MySQL 性能调优与分布式系统维护经验。</p>
        <h2>项目经验</h2>
        <ul>
          <li><strong>OpenClaw:</strong> 基于 Node.js 的自动化 Discord Bot 架构。</li>
          <li><strong>Mom-Tracker:</strong> 部署于 Cloudflare Workers 的状态监控服务。</li>
        </ul>
      </div>
    </body>
  </html>
  `
  return new Response(html, {
    headers: { "content-type": "text/html;charset=UTF-8" },
  })
}
