addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const html = `
  <!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>张涛 - SRE运维工程师 简历</title>
    <style>
        @page {
            size: A4;
            margin: 15mm;
            background-color: #f8fafc;
        }
        body {
            font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
            color: #1e293b;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            font-size: 10.5pt;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #ffffff;
            padding: 40px;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        header {
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 20px;
            margin-bottom: 25px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .header-left h1 {
            margin: 0;
            font-size: 24pt;
            color: #1e3a8a;
            letter-spacing: 2px;
        }
        .header-left p {
            margin: 5px 0 0 0;
            font-size: 13pt;
            color: #64748b;
            font-weight: 500;
        }
        .contact-info {
            text-align: right;
            font-size: 9.5pt;
            color: #475569;
        }
        .contact-info p { margin: 2px 0; }
        
        h2 {
            font-size: 14pt;
            color: #1e3a8a;
            border-left: 5px solid #3b82f6;
            padding-left: 12px;
            margin: 30px 0 15px 0;
            background: #eff6ff;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        
        .section-content {
            padding-left: 5px;
        }
        
        .job-item, .project-item {
            margin-bottom: 20px;
            page-break-inside: avoid;
        }
        
        .item-header {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            color: #334155;
            margin-bottom: 5px;
            font-size: 11pt;
        }
        
        .item-sub {
            font-style: italic;
            color: #64748b;
            font-size: 10pt;
            margin-bottom: 8px;
        }
        
        ul {
            margin: 8px 0;
            padding-left: 20px;
        }
        
        li {
            margin-bottom: 5px;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        
        .skill-tag {
            background: #f1f5f9;
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 9.5pt;
            display: inline-block;
            margin: 2px;
            border: 1px solid #e2e8f0;
        }

        .tag-container {
            margin-top: 5px;
        }

        .math {
            font-family: 'Times New Roman', serif;
            font-style: italic;
            font-weight: bold;
            color: #3b82f6;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="header-left">
                <h1>张 涛</h1>
                <p>高级 SRE 运维工程师 / 平台工程师</p>
            </div>
            <div class="contact-info">
                <p>电话：193-5523-3278</p>
                <p>邮箱：zhangtao1994hk@gmail.com</p>
                <p>770141932@qq.com</p>
                <p>上海/海外 | 32岁 | 男</p>
            </div>
        </header>

        <section>
            <h2>职业总结</h2>
            <div class="section-content">
                <p>资深 SRE 运维工程师，拥有 7 年互联网基础设施运维与架构经验。深耕 <strong>基础设施即代码 (IaC)</strong> 与 <strong>GitOps</strong> 体系，擅长利用 Terraform、Terragrunt 及 Atlantis 构建可扩展的云原生架构。在 GCP 全球架构设计、Kubernetes 大规模集群治理及 CI/CD 流水线优化方面有深厚积淀。追求自动化运维极致体验，具备从零构建企业级 Landing Zone 的实战能力。</p>
            </div>
        </section>

        <section>
            <h2>核心技能</h2>
            <div class="section-content">
                <div class="tag-container">
                    <span class="skill-tag">Linux 专家级调优</span>
                    <span class="skill-tag">Kubernetes (GKE/Self-hosted)</span>
                    <span class="skill-tag">Terraform & Terragrunt</span>
                    <span class="skill-tag">Ansible 自动化</span>
                    <span class="skill-tag">GitOps (Atlantis/Prow)</span>
                    <span class="skill-tag">GCP/Cloudflare Edge</span>
                    <span class="skill-tag">CI/CD Pipeline</span>
                    <span class="skill-tag">MySQL/Redis 高可用</span>
                    <span class="skill-tag">Nginx/OpenResty</span>
                    <span class="skill-tag">Prometheus & Grafana</span>
                </div>
            </div>
        </section>

        <section>
            <h2>工作经历</h2>
            <div class="section-content">
                <div class="job-item">
                    <div class="item-header">
                        <span>来也网络科技有限公司上海分公司</span>
                        <span>2019.06 — 2022.10</span>
                    </div>
                    <div class="item-sub">运维工程师 / SRE</div>
                    <ul>
                        <li>负责公司核心 RPA 平台与 AI 产品的容器化落地，管理数百个节点规模的 Kubernetes 集群。</li>
                        <li>主导基础设施自动化改造，利用 Ansible 实现千台规模服务器的配置一致性管理。</li>
                        <li>优化 Nginx 负载均衡策略与 MySQL 主从架构，提升系统可用性至 <span class="math">99.99%</span>。</li>
                        <li>建立全方位监控预警体系，基于 Prometheus 实现精准告警，平均故障修复时间 (MTTR) 降低 40%。</li>
                    </ul>
                </div>

                <div class="job-item">
                    <div class="item-header">
                        <span>神策网络科技有限公司上海分公司</span>
                        <span>2017.02 — 2019.05</span>
                    </div>
                    <div class="item-sub">实施工程师</div>
                    <ul>
                        <li>负责大数据分析平台在客户侧的私有化部署与性能调优。</li>
                        <li>协助客户完成底层架构规划（计算/存储/网络），解决高并发环境下的数据采集瓶颈。</li>
                        <li>编写自动化运维脚本，极大缩短了复杂分布式系统的交付周期。</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h2>重点项目经验</h2>
            <div class="section-content">
                <div class="project-item">
                    <div class="item-header">
                        <span>GCP 企业级 Landing Zone 构建与 IaC 迁移</span>
                        <span>个人技术演进项目</span>
                    </div>
                    <ul>
                        <li><strong>技术栈：</strong> Terraform, Terragrunt, Atlantis, GCP, GitHub Actions.</li>
                        <li><strong>工作内容：</strong> 构建生产级的 Google Cloud Landing Zone，设计多项目隔离架构。</li>
                        <li><strong>核心成果：</strong> 
                            通过 <strong>Terragrunt</strong> 解决原生 Terraform 代码冗余问题，实现跨环境配置复用；
                            集成 <strong>Atlantis</strong> 实现 GitOps 工作流，通过 PR 触发基础设施变更审计，避免手动执行 apply 带来的风险。
                        </li>
                    </ul>
                </div>

                <div class="project-item">
                    <div class="item-header">
                        <span>边缘侧运维自动化套件 (Serverless Utils)</span>
                        <span>个人技术项目</span>
                    </div>
                    <ul>
                        <li><strong>技术栈：</strong> Cloudflare Workers, KV Storage, Prometheus, Discord/Feishu Webhook.</li>
                        <li><strong>核心成果：</strong> 
                            利用 <strong>Cloudflare Workers</strong> 开发轻量级状态监测服务（Mom-tracker），实现零成本高可用的家庭/团队状态同步；
                            自研 Prometheus 到飞书的 Webhook 解析器，支持动态告警收敛与格式化推送。
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h2>教育背景</h2>
            <div class="section-content">
                <div class="item-header">
                    <span>南华大学</span>
                    <span>2012 — 2016</span>
                </div>
                <div class="item-sub">资源勘查工程 | 本科</div>
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
