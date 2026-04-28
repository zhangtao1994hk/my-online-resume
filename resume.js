addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const html = `
  <!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>张涛 - SRE运维工程师 简历</title>
    <style>
        :root {
            --primary-color: #1e3a8a;
            --accent-color: #3b82f6;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --bg-light: #f8fafc;
            --status-bg: #fee2e2;
            --status-text: #dc2626;
        }

        body {
            font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: var(--text-main);
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: var(--bg-light);
        }

        .container {
            max-width: 850px;
            margin: 40px auto;
            background: #ffffff;
            padding: 50px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        /* 打印适配 */
        @media print {
            body { background: white; }
            .container { 
                margin: 0; 
                box-shadow: none; 
                max-width: 100%;
                padding: 30px;
            }
            .no-print { display: none; }
        }

        header {
            border-bottom: 2px solid var(--accent-color);
            padding-bottom: 25px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
        }

        .header-left h1 {
            margin: 0;
            font-size: 32px;
            color: var(--primary-color);
            letter-spacing: 1px;
        }

        .header-left .title {
            margin: 8px 0;
            font-size: 18px;
            color: var(--text-muted);
            font-weight: 500;
        }

        /* 状态与社交链接 */
        .status-bar {
            margin-top: 15px;
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }

        .status-tag {
            background: var(--status-bg);
            color: var(--status-text);
            padding: 3px 12px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: bold;
            border: 1px solid #fecaca;
        }

        .social-link {
            text-decoration: none;
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: opacity 0.2s;
        }
        
        .social-link.github { color: #334155; }
        .social-link.location { color: var(--accent-color); }
        .social-link:hover { opacity: 0.8; }

        .contact-info {
            text-align: right;
            font-size: 14px;
            color: #475569;
        }
        .contact-info p { margin: 4px 0; }

        section { margin-bottom: 35px; }

        h2 {
            font-size: 19px;
            color: var(--primary-color);
            border-left: 5px solid var(--accent-color);
            padding-left: 15px;
            margin: 0 0 20px 0;
            background: #eff6ff;
            padding-top: 8px;
            padding-bottom: 8px;
        }

        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill-tag {
            background: #f1f5f9;
            padding: 5px 12px;
            border-radius: 6px;
            font-size: 13px;
            color: var(--text-main);
            border: 1px solid #e2e8f0;
            font-weight: 500;
        }

        .item-header {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            color: #334155;
            margin-bottom: 5px;
            font-size: 16px;
        }

        .item-sub {
            display: flex;
            justify-content: space-between;
            font-style: italic;
            color: var(--text-muted);
            font-size: 14px;
            margin-bottom: 10px;
        }

        ul {
            margin: 10px 0;
            padding-left: 20px;
        }

        li {
            margin-bottom: 8px;
            font-size: 15px;
        }

        strong { color: #0f172a; }

        svg { width: 16px; height: 16px; }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <div class="header-left">
                <h1>张 涛</h1>
                <p class="title">高级 SRE 运维工程师 / 平台工程师</p>
                
                <div class="status-bar">
                    <span class="status-tag">● 当前状态：已离职 (随时到岗)</span>
                    
                    <a href="https://github.com/zhangtao1994hk" target="_blank" class="social-link github">
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                    </a>

                    <a href="https://zhangtao1994hk.asia" target="_blank" class="social-link location">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        实时位置
                    </a>
                </div>
            </div>
            
            <div class="contact-info">
                <p><strong>电话:</strong> 193-5523-3278</p>
                <p><strong>邮箱:</strong> zhangtao1994hk@gmail.com</p>
                <p><strong>备用:</strong> 770141932@qq.com</p>
                <p>上海 / 海外 | 32岁 | 7年经验</p>
            </div>
        </header>

        <section>
            <h2>核心技能</h2>
            <div class="skills-container">
                <span class="skill-tag">Kubernetes (GKE/Self-hosted)</span>
                <span class="skill-tag">Terraform & Terragrunt</span>
                <span class="skill-tag">GitOps (Atlantis/ArgoCD)</span>
                <span class="skill-tag">Linux 内核调优</span>
                <span class="skill-tag">Ansible 自动化</span>
                <span class="skill-tag">GCP 架构设计</span>
                <span class="skill-tag">Prometheus & Grafana</span>
                <span class="skill-tag">MySQL/Redis 高可用</span>
                <span class="skill-tag">Nginx/OpenResty</span>
                <span class="skill-tag">Cloudflare Workers/Edge</span>
            </div>
        </section>

        <section>
            <h2>工作经历</h2>
            <div class="experience-item">
                <div class="item-header">
                    <span>来也网络科技有限公司上海分公司</span>
                    <span>2019.06 — 2022.10</span>
                </div>
                <div class="item-sub">
                    <span>运维工程师 / SRE</span>
                    <span>上海</span>
                </div>
                <ul>
                    <li>管理支撑 RPA 业务的大规模 <strong>Kubernetes</strong> 集群，负责集群从零到一的规划与生产落地。</li>
                    <li>使用 <strong>Ansible</strong> 实现全量服务器的基线管理，将应用部署效率提升了 3 倍。</li>
                    <li>主导数据库高可用架构改造，确保 <strong>MySQL/Redis</strong> 在高负载场景下的稳定性，达成 99.99% SLA。</li>
                    <li>构建全栈监控链路，大幅优化告警收敛逻辑，MTTR 降低约 40%。</li>
                </ul>
            </div>

            <div class="experience-item" style="margin-top: 25px;">
                <div class="item-header">
                    <span>神策网络科技有限公司上海分公司</span>
                    <span>2017.02 — 2019.05</span>
                </div>
                <div class="item-sub">
                    <span>实施工程师</span>
                    <span>上海</span>
                </div>
                <ul>
                    <li>负责私有化部署环境下大数据平台的安装、调优与故障排查。</li>
                    <li>深入客户现场，解决跨网络域、复杂防火墙环境下的组件通信与数据采集难题。</li>
                    <li>编写自动化脚本处理常规巡检，显著提升了项目交付的标准化程度。</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>重点项目</h2>
            <div class="experience-item">
                <div class="item-header">
                    <span>企业级 Landing Zone 与 GitOps 治理方案</span>
                </div>
                <ul>
                    <li><strong>项目背景：</strong> 为解决多团队、多环境下的基础设施配置混乱问题。</li>
                    <li><strong>技术方案：</strong> 使用 <strong>Terragrunt</strong> 对 Terraform 代码进行分层治理，引入 <strong>Atlantis</strong> 建立 GitOps 工作流。</li>
                    <li><strong>核心成果：</strong> 实现了基础设施变更的 PR 审计机制，彻底消灭了“手动 apply”带来的状态偏差。</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>教育背景</h2>
            <div class="experience-item">
                <div class="item-header">
                    <span>南华大学</span>
                    <span>2012 — 2016</span>
                </div>
                <div class="item-sub">
                    <span>资源勘查工程</span>
                    <span>本科</span>
                </div>
            </div>
        </section>
    </div>

</body>
</html>
  `
  return new Response(html, {
    headers: { "content-type": "text/html;charset=UTF-8" },
  })
}
