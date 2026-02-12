import React from 'react';
import { ParallaxSlide, SectionTitle, ContentGrid, Card } from './components/ParallaxSlide';
import {
  ChefHat,
  FileCode,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Play,
  ArrowRight,
  Scale,
  Layers,
  Cpu,
  ListChecks,
  MousePointerClick,
  Terminal,
  BrainCircuit,
  Cloud,
  Settings,
  ShieldCheck,
  PencilRuler,
  SearchCheck,
  UserCheck,
  CalendarDays,
  Clock,
  History,
  Zap,
  Binary,
  TestTube2,
  Handshake,
  Workflow,
  Users,
  Code2,
  Milestone,
  CheckCircle2,
  Activity,
  AlertCircle,
  Lightbulb,
  MessageSquarePlus,
  Rocket,
  ArrowUp
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const CascadingBar = ({ label, start, end, category, index }: { label: string, start: number, end: number, category: 'poc' | 'cx' | 'design' | 'qc', index: number }) => {
  const baseColors = {
    poc: 'bg-orange-500',
    cx: 'bg-blue-500',
    design: 'bg-violet-500',
    qc: 'bg-slate-500'
  };

  const left = `${(start / 10) * 100}%`;
  const width = `${((end - start) / 10) * 100}%`;

  return (
    <div className="relative w-full h-16 flex items-center">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: width, opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
        className={`absolute h-10 ${baseColors[category]} rounded-lg shadow-sm border border-white/20 flex items-center px-4 z-20 overflow-hidden`}
        style={{ left }}
      >
        <span className="text-base font-black text-white whitespace-nowrap drop-shadow-sm">
          {label}
        </span>
      </motion.div>
    </div>
  );
};

const ConnectionArrow = ({ startCol, endCol, rowFrom }: { startCol: number, endCol: number, rowFrom: number }) => {
  const startX = `${(startCol / 10) * 100}%`;
  const endX = `${(endCol / 10) * 100}%`;

  return (
    <div className="absolute inset-0 pointer-events-none z-10" style={{ top: `${rowFrom * 64 + 32}px`, height: '64px' }}>
      <svg className="w-full h-full overflow-visible">
        <motion.path
          d={`M ${startX} 8 L ${startX} 32 L ${endX} 32 L ${endX} 40`}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          className="text-zinc-300"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        <motion.path
          d={`M ${endX} 40 l -3 -5 l 6 0 z`}
          className="text-zinc-300 fill-current"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        />
      </svg>
    </div>
  );
};

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setIsVisible(latest > 0.05);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, pointerEvents: isVisible ? 'auto' : 'none' }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-zinc-900 text-white rounded-full shadow-lg hover:bg-zinc-800 hover:scale-110 transition-colors group"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { id: 'vision', label: '1. 사업 이해' },
    { id: 'roles', label: '2. 역할 및 범위' },
    { id: 'experience', label: '3. 유사 업무 참여 경험' },
    { id: 'collaboration', label: '4. 협업 방안' },
    { id: 'requests', label: '5. 제언/요청사항' },
    { id: 'rulebased', label: '[#별첨1] 룰베이스 기획(안)' },
    { id: 'examples', label: '[#별첨2] 룰베이스 기획 예시' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative text-zinc-900 text-lg leading-relaxed">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Scroll To Top Button */}
      <ScrollToTop />

      {/* LNB */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3 p-4 bg-zinc-900/5 backdrop-blur-sm rounded-2xl border border-zinc-200/50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3 text-left transition-all"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-blue-600 group-hover:scale-150 transition-all" />
            <span className="text-base font-medium text-zinc-500 uppercase tracking-tighter group-hover:text-zinc-900 transition-all whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Slide 0: Cover */}
      <ParallaxSlide id="cover" isFirst={true}>
        <div className="flex flex-col h-full justify-center items-center text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="text-2xl font-black tracking-widest text-zinc-400">IBK</div>
              <div className="w-px h-8 bg-zinc-200" />
              <div className="text-2xl font-black tracking-widest text-zinc-400">SDS</div>
              <div className="w-px h-8 bg-zinc-200" />
              <div className="text-2xl font-black tracking-widest text-zinc-400 text-red-600">ETRIBE</div>
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none keep-all">
              AI-Driven<br />
              Workflow
            </h1>

            <p className="text-2xl md:text-3xl font-light text-zinc-500 tracking-tight mt-12">
              생산성·효율성 제고를 위한 AI 기반 워크 플로우
            </p>

            <div className="flex flex-col items-center mt-24">
              <div className="px-8 py-3 bg-zinc-900 text-white rounded-full text-lg font-bold tracking-widest uppercase">
                ETRIBE AX Center
              </div>
              <div className="mt-4 text-zinc-400 text-sm font-medium tracking-widest">
                2026. 02. 12
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-12 flex flex-col items-center gap-4 text-zinc-400">
            <span className="text-sm font-bold uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowRight className="rotate-90" size={24} />
            </motion.div>
          </div>
        </div>
      </ParallaxSlide>

      {/* Slide 1: Index (TOC) */}
      <ParallaxSlide id="index">
        <div className="flex flex-col h-full justify-center py-12">
          <SectionTitle subtitle="CONTENTS">목차</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-12 ml-4">
            {[
              { num: '01', title: '사업 이해', sub: 'Project Vision & Technical Goals' },
              { num: '02', title: '역할 및 범위', sub: 'Participation Scope & Responsibilities' },
              { num: '03', title: '유사 업무 참여 경험', sub: 'Experience & Track Record' },
              { num: '04', title: '협업 방안', sub: 'Collaboration Strategy & Roadmap' },
              { num: '05', title: '제언/요청사항', sub: 'Strategic Requests & PoC Requirements' },
              { num: '별첨', title: '룰 베이스 기획(안)', sub: 'Advanced Planning Methodology' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-8 group cursor-pointer"
                onClick={() => scrollToSection(item.num === '별첨' ? 'rulebased' : navItems.find(n => n.label.includes(item.title))?.id || '')}
              >
                <div className="text-4xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">
                  {item.num}
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold group-hover:translate-x-2 transition-transform">{item.title}</h3>
                  <p className="text-lg text-zinc-400 font-medium group-hover:translate-x-2 transition-transform transition-delay-75 uppercase tracking-wider">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSlide>

      {/* Slide 2: 1. Project Understanding */}
      <ParallaxSlide id="vision">
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">IBK Project Vision</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Introduction</span>
          </div>

          <div className="flex flex-col gap-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight keep-all">
              1. 사업 이해
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-2xl font-light leading-relaxed keep-all text-zinc-700">
                  본 사업은 <span className="font-bold text-zinc-900">IBK 프라이빗 클라우드</span> 기반 플랫폼 서비스 구축 및 글로벌 뱅킹 테스트베드 개발을 1단계로 진행합니다.
                </p>
                <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
                    <ShieldCheck className="text-blue-600" /> 핵심 목표
                  </h3>
                  <p className="text-lg text-blue-900 keep-all">
                    단순 구축을 넘어 <strong>개발 프로세스 및 아키텍처 정립</strong>과 <strong>SR/CR 운영 방법론 확립</strong>을 최우선<br />과제로 수행
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold border-b border-zinc-200 pb-4">주요 기술 방향</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-zinc-100 p-2 rounded h-fit"><Settings size={20} /></div>
                    <div>
                      <strong className="block text-xl">디자인 시스템 고도화</strong>
                      <p className="text-zinc-600 text-lg">IBK 기존 디자인 표준을 완전한 디자인 시스템으로 체계화</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-zinc-100 p-2 rounded h-fit"><Cpu size={20} /></div>
                    <div>
                      <strong className="block text-xl">자동 변환 워크플로우</strong>
                      <p className="text-zinc-600 text-lg">Figma 디자인 시스템 → FiCA(룰 베이스) → React 소스 자동 변환</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-zinc-100 p-2 rounded h-fit"><BrainCircuit size={20} /></div>
                    <div>
                      <strong className="block text-xl">Spec Driven Development</strong>
                      <p className="text-zinc-600 text-lg">AI Pro 기반의 명세 중심 개발(SDD) 프로세스 적용</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide>

      {/* Slide 1: 2. Roles and Scope */}
      <ParallaxSlide id="roles">
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">Scope of Work</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Roles</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-10 keep-all">
            2. 참여 가능한 역할 및 범위
          </h1>

          <div className="grid grid-cols-1 gap-12 overflow-y-auto max-h-[60vh] pr-4">
            {/* 2.1 CX Planning */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-blue-600">
                <Layers size={24} /> 2.1 CX 기획
              </h3>
              <div className="overflow-hidden rounded-xl border border-zinc-200">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      <th className="p-4 font-bold text-zinc-900 w-1/4">영역</th>
                      <th className="p-4 font-bold text-zinc-900 w-2/4">상세 내용</th>
                      <th className="p-4 font-bold text-zinc-900 w-1/4">비고</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">분석</td>
                      <td className="p-4 text-zinc-600">AI-IS 주요 컴포넌트 식별 및 분석</td>
                      <td className="p-4"></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">공통 컴포넌트 기획</td>
                      <td className="p-4 text-zinc-600 keep-all">컴포넌트 분석, 기능 정의, 사용 시나리오 작성</td>
                      <td className="p-4 text-zinc-500 text-base">개발자와 기획 단계부터 지속 논의</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">화면 정의서 작성</td>
                      <td className="p-4 text-zinc-600 keep-all">AI Pro SDD 입력 규격에 맞는 화면 정의서 작성<br />테스트 시나리오 도출 최적화를 위한 룰베이스 기반 디스크립션 작성</td>
                      <td className="p-4 text-zinc-500 text-base">SDS AI Pro 팀과 사전 협의 필요</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.2 Design System */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-violet-600">
                <PencilRuler size={24} /> 2.2 디자인 시스템 설계 및 표준화
              </h3>
              <div className="overflow-hidden rounded-xl border border-zinc-200">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      <th className="p-4 font-bold text-zinc-900 w-1/4">영역</th>
                      <th className="p-4 font-bold text-zinc-900 w-2/4">상세 내용</th>
                      <th className="p-4 font-bold text-zinc-900 w-1/4">비고</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">디자인 토큰 체계 설계</td>
                      <td className="p-4 text-zinc-600 keep-all">Color, Typography, Spacing, Elevation 등 토큰 정의 및 계층 구조 수립</td>
                      <td className="p-4 text-zinc-500 text-base">IBK 기존 디자인 표준 현황 확인 후 범위 확정 필요</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">베리언트 설계</td>
                      <td className="p-4 text-zinc-600 keep-all">컴포넌트별 상태(State), 사이즈(Size), 테마(Theme) 베리언트 정의</td>
                      <td className="p-4 text-zinc-500 text-base">FiCA 매칭을 위한 규격 준수</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">Figma 컴포넌트 라이브러리 구축</td>
                      <td className="p-4 text-zinc-600 keep-all">공통 UI 컴포넌트의 Figma 설계 및 프로퍼티 정의</td>
                      <td className="p-4 text-zinc-500 text-base">개발팀과 지속 협의하며 진행</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">CX 디자인</td>
                      <td className="p-4 text-zinc-600">전체 화면 디자인 제작</td>
                      <td className="p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-6 bg-zinc-900 text-white rounded-2xl shadow-xl border-l-[12px] border-violet-600 transform hover:scale-[1.02] transition-transform">
                <p className="text-xl font-black tracking-tight flex items-center gap-4">
                  <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse" />
                  디자인 시스템 설계 사례는 별도 출력물을 통해 리뷰 예정
                </p>
              </div>
            </div>

            {/* 2.3 QC */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-600">
                <SearchCheck size={24} /> 2.3 퍼블리싱 검증 및 품질 관리
              </h3>
              <div className="overflow-hidden rounded-xl border border-zinc-200">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      <th className="p-4 font-bold text-zinc-900 w-1/4">영역</th>
                      <th className="p-4 font-bold text-zinc-900 w-2/4">상세 내용</th>
                      <th className="p-4 font-bold text-zinc-900 w-1/4">비고</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">FiCA 생성 코드 Set up 및 변경</td>
                      <td className="p-4 text-zinc-600 keep-all">요구 사항에 따른 변경 내용을 수정 업데이트 후 FiCA 현행화 가이드 제공</td>
                      <td className="p-4"></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">사용자 테스트 부분 지원</td>
                      <td className="p-4 text-zinc-600 keep-all">룰 베이스 테스트 시나리오에 따른 테스트 후 테스트 결과 수집</td>
                      <td className="p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide>
      <ParallaxSlide id="experience">
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">Experience & Track Record</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Chapter 02</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-12 keep-all">
            3. 유사 업무 참여 경험
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <History className="text-blue-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 keep-all leading-tight">3.1 디자인 시스템 구축 및 운영</h3>
              <ul className="space-y-3 text-zinc-600">
                <li className="keep-all"><span className="font-bold text-zinc-900">·</span> SDS OPUS(원플랫폼) 기반 Figma 디자인 시스템 공동 구축 및 운영 외 다수</li>
                <li className="keep-all"><span className="font-bold text-zinc-900">·</span> Figma Developer 계정을 활용한 퍼블리싱 소스 자동 생성 체계 정착</li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-zinc-900 transition-colors">
                <Zap className="text-zinc-900 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 keep-all leading-tight">3.2 퍼블리싱 자동화 내부 PoC</h3>
              <ul className="space-y-3 text-zinc-600">
                <li><span className="font-bold text-zinc-900">시점:</span> 최근 내부 테스트 진행</li>
                <li className="keep-all"><span className="font-bold text-zinc-900">내용:</span> Figma 토큰 규칙 기반 프롬프트 입력 → HTML 자동 생성 테스트</li>
                <li className="keep-all"><span className="font-bold text-zinc-900">결과:</span> 토큰 규칙이 정확히 적용된 Figma 파일 기준으로 HTML 자동 생성 확인</li>
                <li className="pt-2 italic text-blue-600 font-medium keep-all">"룰 베이스 기반 자동화 워크플로우에 대한 실무적 이해 보유"</li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <Binary className="text-indigo-600 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 keep-all leading-tight">3.3 Figma MCP 기반 테스트 자동화</h3>
              <ul className="space-y-3 text-zinc-600 text-base leading-relaxed">
                <li className="keep-all">Figma MCP를 통해 디자인 데이터를 추출하고, 이를 AI로 테스트 시나리오로 자동 변환하는 프로세스 테스트</li>
                <li className="keep-all">Figma 데이터 추출 → 시나리오 생성 → <span className="text-zinc-900 font-bold">Playwright 기반 E2E 테스트 자동화</span> 파이프라인 구축</li>
                <li className="pt-2 text-indigo-600 font-bold border-t border-zinc-100 mt-2 keep-all">
                  본 사업의 SDD에서 요구하는 "기획 → 테스트 자동화" 흐름에 대한 직접적인 실무 경험 보유
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide >

      {/* Slide 4: 4. SDS Collaboration Plan (4.1) */}
      < ParallaxSlide id="collaboration" >
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">Collaboration Strategy</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Chapter 03</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-12 keep-all">
            4. SDS 협업 방안
          </h1>

          <div className="flex flex-col gap-10">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-zinc-700">
              <Workflow size={32} className="text-blue-600" /> 4.1 역할 분담(안)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* SDS Side */}
              <div className="bg-blue-50 border border-blue-100 rounded-3xl overflow-hidden shadow-sm flex flex-col">
                <div className="bg-blue-600 p-6 text-white flex items-center gap-3">
                  <Code2 size={24} />
                  <h4 className="text-2xl font-black">SDS 영역</h4>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "AI Pro 개발/운영",
                      "백엔드 개발",
                      "FiCA 도구 운영/룰 베이스 정의",
                      "컴포넌트 개발",
                      "테스트 코드 생성(AI Pro)",
                      "FiCA 매칭 작업"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-blue-900">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                        <span className="font-semibold text-lg leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* eTribe Side */}
              <div className="bg-red-50 border border-red-100 rounded-3xl overflow-hidden shadow-sm flex flex-col">
                <div className="bg-red-600 p-6 text-white flex items-center gap-3">
                  <PencilRuler size={24} />
                  <h4 className="text-2xl font-black">ETRIBE 영역</h4>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "CX 기획(AS-IS 분석/분류)",
                      "Figma 컴포넌트 라이브러리",
                      "디자인 시스템 설계",
                      "FiCA 규격에 맞춘 Figma 디자인",
                      "퍼블리싱 코드 검증 및 수정",
                      "접근성 표준 수립",
                      "코딩 컨벤션 수립/적용",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-red-900">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                        <span className="font-semibold text-lg leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Collaboration Bridge */}
              <div className="bg-purple-900 border border-purple-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                <div className="bg-purple-800 p-6 text-white flex items-center gap-3">
                  <Handshake size={24} />
                  <h4 className="text-2xl font-black">협업 영역</h4>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-6">
                    {[
                      "Figma 룰 베이스 규칙 전달/적용",
                      "화면 정의서 양식/규격",
                      "테스트 시나리오 작성 방법론",
                      "컴포넌트 기획-개발 연계",
                      "운영 단계 변경 대응 프로세스"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-purple-500 transition-colors">
                          <Users size={18} className="text-white/60 group-hover:text-white" />
                        </div>
                        <span className="font-bold text-lg text-white leading-tight keep-all">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 p-4 bg-white/5 rounded-2xl text-purple-300 text-base font-medium text-center italic">
                    "실시간 싱크업을 통한 SDD 파이프라인 최적화"
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide >

      {/* Slide 5: 4.2 Collaboration Process */}
      < ParallaxSlide id="process" >
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">Roadmap</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Chapter 04</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-12 keep-all">
            4. SDS 협업 방안
          </h1>

          <div className="flex flex-col gap-10">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-zinc-700">
              <Workflow size={32} className="text-blue-600" /> 4.2 협업 프로세스(안)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto max-h-[70vh] pr-4 py-4">

              {/* Phase 1 */}
              <div className="relative p-8 bg-zinc-50 border border-zinc-200 rounded-3xl flex flex-col h-full hover:bg-white hover:shadow-2xl transition-all">
                <div className="absolute top-6 right-8 text-blue-600 font-black text-4xl opacity-10">01</div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
                    <Milestone size={24} />
                  </div>
                  <div>
                    <div className="text-base font-bold text-blue-600 uppercase">M1 ~ M3</div>
                    <h4 className="text-xl font-black">Phase 1: 표준 수립</h4>
                  </div>
                </div>
                <ul className="space-y-4 text-zinc-600 text-base flex-grow">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <p className="keep-all">IBK 기존 서비스 분석 및 주요 컴포넌트 및 유저 행동 분석</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <p className="keep-all">IBK 기존 디자인 표준 현황 파악 → 디자인 시스템 설계</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <p className="keep-all">SDS 개발팀과 컴포넌트 기획 협의 (기획 단계부터 개발자 참여)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <p className="keep-all">SDS로부터 FiCA 룰 베이스 규칙 전달받아 Figma 작업 규격 확정</p>
                  </li>
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="relative p-8 bg-zinc-50 border border-zinc-200 rounded-3xl flex flex-col h-full hover:bg-white hover:shadow-2xl transition-all">
                <div className="absolute top-6 right-8 text-indigo-600 font-black text-4xl opacity-10">02</div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200">
                    <Activity size={24} />
                  </div>
                  <div>
                    <div className="text-base font-bold text-indigo-600 uppercase">M3 ~ M6</div>
                    <h4 className="text-xl font-black">Phase 2: 공통 구축</h4>
                  </div>
                </div>
                <ul className="space-y-4 text-zinc-600 text-base flex-grow">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                    <p className="keep-all">디자인 토큰/베리언트 제작(eTribe) → 컴포넌트 개발(SDS) → FiCA 매칭(SDS)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                    <p className="keep-all">eTribe는 FiCA 규격에 맞춘 Figma 디자인 납품, SDS는 룰 베이스 및 매칭 작업 수행</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                    <p className="keep-all">공통 컴포넌트 기획(eTribe)-개발(SDS)-검증(eTribe) 사이클 반복</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                    <p className="keep-all">FiCA 룰에 IBK 코딩컨벤션, 웹접근성 규칙 및 지침 이식 협업</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                    <p className="keep-all">1차 버전 완료 및 검증 / 테스트 방안 PoC 및 테스트</p>
                  </li>
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="relative p-8 bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col h-full shadow-xl">
                <div className="absolute top-6 right-8 text-white font-black text-4xl opacity-10">03</div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white text-zinc-900 rounded-xl shadow-lg">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-base font-bold text-zinc-400 uppercase">M7 ~ M10</div>
                    <h4 className="text-xl font-black text-white">Phase 3: 글로벌 적용</h4>
                  </div>
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-4">
                    <p className="text-zinc-300 keep-all">구축된 디자인 시스템 및 FiCA 자동화 파이프라인을 실제 글로벌 뱅킹 화면에 적용 및 확산하는 단계입니다.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-400 font-bold">
                      <Zap size={16} />
                      SDD 고도화 완료
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 font-bold">
                      <Zap size={16} />
                      글로벌 뱅킹 대규모 배포
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="flex justify-center mt-12 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide >

      {/* Slide 6: 5. Suggestions and Requirements (NEW LOCATION) */}
      < ParallaxSlide id="requests" >
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">Strategic Requests</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Chapter 05</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-10 keep-all">
            5. 추가 제언 및 요청사항
          </h1>

          <div className="grid grid-cols-1 gap-12 overflow-y-auto max-h-[70vh] pr-4 py-2">

            {/* 5.1 Table Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-zinc-700">
                <AlertCircle size={28} className="text-blue-600" /> 5.1 사전 확인 필요 사항
              </h3>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-100 border-b border-zinc-200">
                    <tr>
                      <th className="p-4 font-bold text-zinc-900 w-[6%] text-center">#</th>
                      <th className="p-4 font-bold text-zinc-900 w-[28%] whitespace-nowrap">항목</th>
                      <th className="p-4 font-bold text-zinc-900 w-[52%]">상세</th>
                      <th className="p-4 font-bold text-zinc-900 w-[14%] whitespace-nowrap text-center">필요 시점</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white text-lg">
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">1</td>
                      <td className="p-5 font-bold text-zinc-900">IBK 기존 디자인 표준 현황</td>
                      <td className="p-5 text-zinc-600 keep-all">현재 디자인 표준/시스템이 어디까지 정의되어 있는지에 따라 디자인 시스템 구축 작업량이 크게 달라짐</td>
                      <td className="p-5 font-bold text-blue-600">착수 전</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">2</td>
                      <td className="p-5 font-bold text-zinc-900">FiCA 룰 베이스 규칙 공유</td>
                      <td className="p-5 text-zinc-600 keep-all">SDS에서 정의하는 FiCA 룰 베이스 규칙(Figma 프레임/레이아웃 규격, 프로퍼티 네이밍 등)을 사전에 전달받아야 Figma 작업 착수 가능</td>
                      <td className="p-5 font-bold text-indigo-600">M1 초기</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">3</td>
                      <td className="p-5 font-bold text-zinc-900">화면 정의서 양식 및 SDD 입력 규격</td>
                      <td className="p-5 text-zinc-600 keep-all">AI Pro SDD에서 요구하는 정의서 양식 확정 필요. 특히 인수 조건(Acceptance Criteria)을 어떤 형식과 수준으로 작성해야 하는지 구체적 예시 필요</td>
                      <td className="p-5 font-bold text-indigo-600">M1 초기</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">4</td>
                      <td className="p-5 font-bold text-zinc-900">외부 AI 도구 사용 가능 여부</td>
                      <td className="p-5 text-zinc-600 keep-all">IBK 보안 정책상 Figma 외 외부 AI 도구(Claude, ChatGPT 등) 사용 가능 여부. 로컬 LLM API 답변 가능 여부 및 모델 정보 (기획/디자인 생산성 직결)</td>
                      <td className="p-5 font-bold text-blue-600">착수 전</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">5</td>
                      <td className="p-5 font-bold text-zinc-900">피그마 엔터프라이즈 버전 사용여부</td>
                      <td className="p-5 text-zinc-600 keep-all">프라이빗 피그마 플러그인 활용들에 따른 권한 문제</td>
                      <td className="p-5 font-bold text-blue-600">착수 전</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5.2 Suggestion Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-zinc-700">
                <Lightbulb size={28} className="text-yellow-500" /> 5.2 추가 제언
              </h3>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-100 border-b border-zinc-200">
                    <tr>
                      <th className="p-4 font-bold text-zinc-900 w-[5%] text-center">#</th>
                      <th className="p-4 font-bold text-zinc-900 w-[12%] text-center">분야</th>
                      <th className="p-4 font-bold text-zinc-900 w-[23%]">내용</th>
                      <th className="p-4 font-bold text-zinc-900 w-[30%]">기대효과</th>
                      <th className="p-4 font-bold text-zinc-900 w-[30%]">비고</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white text-lg">
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">1</td>
                      <td className="p-5 text-center font-bold text-zinc-900">생산성</td>
                      <td className="p-5 font-bold text-zinc-900 keep-all">FIGMA(디자인) 수정 내역 관리 피그마 플러그인 제공</td>
                      <td className="p-5 text-zinc-600 keep-all text-base">피그마 수정된 페이지 내역만 FiCA 로 전달 업데이트 하는 배치 구성. 변경 승인 워크플로우 생성 가능</td>
                      <td className="p-5 text-zinc-500 text-base italic keep-all font-mono">figma.on('documentchange', callback) 이벤트를 이용한 유사 플러그인 제작경험</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">2</td>
                      <td className="p-5 text-center font-bold text-zinc-900">생산성 및 품질</td>
                      <td className="p-5 font-bold text-zinc-900 keep-all">FiCA 룰베이스 기반 디스크립션 자동완성 피그마 플러그인 제공</td>
                      <td className="p-5 text-zinc-600 keep-all text-base">FiCA 룰 → Yaml 변환 → 피그마 플러그인 기반 제작. 오타 및 휴먼 에러 없는 데스크립션 작성 가능</td>
                      <td className="p-5 text-zinc-500 text-base italic keep-all">AI 연동 없이 작업 하거나 AI 연동 시 추천 등 제시 가능 *</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">3</td>
                      <td className="p-5 text-center font-bold text-zinc-900">품질</td>
                      <td className="p-5 font-bold text-zinc-900 keep-all">FiCA 코딩컨벤션 제공</td>
                      <td className="p-5 text-zinc-600 keep-all text-base">디자인 시스템에 따른 IBK 코딩 컨벤션을 최적화 설계 및 지침으로 제공</td>
                      <td className="p-5 text-zinc-500 text-base italic keep-all">자체 코딩컨벤션 기반 지침 이용한 퍼블리싱 자동화 업무 수준에서 진행중 (클로드 코드, 안티 그래비티) npm + ai API 기반 퍼블리싱 자동화 PoC 중</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">4</td>
                      <td className="p-5 text-center font-bold text-zinc-900">품질</td>
                      <td className="p-5 font-bold text-zinc-900 keep-all">FiCA 웹접근성 지침 및 코드 가이드 제공</td>
                      <td className="p-5 text-zinc-600 keep-all text-base">FiCA 룰 베이스 변환 과정에서 특정 시스템에 사용되어야 하는 속성 가이드 제공</td>
                      <td className="p-5 text-zinc-500 text-base italic keep-all">자체 웹접근성 점검도구 및 크롤링 기반 웹접근성 점검 도구 보유중 (실무 도입 상태) 지침과 원칙 기반 (n8n + AI API 기반)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <div className="flex justify-center mt-12 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide >

      {/* Slide 8: Rule-based Proposal */}
      <ParallaxSlide id="rulebased">
        <div className="text-zinc-500 font-bold mb-6 tracking-tight text-sm">[#별첨1]</div>
        <SectionTitle subtitle="DEFINITION">룰 베이스(Rule-based) 기획(안)</SectionTitle>
        <div className="space-y-12">
          <p className="text-2xl font-medium keep-all">
            기획서의 문장을<br />
            <strong>논리적 조건과 결과의 집합</strong>으로 구성합니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="border border-zinc-200 p-6 rounded-xl hover:shadow-lg transition-shadow bg-white">
              <div className="text-base font-bold text-blue-600 mb-2 uppercase tracking-wider">01. If / Given</div>
              <h3 className="text-2xl font-bold mb-3">조건</h3>
              <p className="text-zinc-600 mb-4 text-base">행위가 일어나기 전의 시스템 상태</p>
              <div className="bg-zinc-100 p-3 rounded text-base text-zinc-700">
                ex) 사용자가 로그인을 완료하고, 계좌에 잔액이 100만 원 이상 있을 때
              </div>
            </div>

            <div className="border border-zinc-200 p-6 rounded-xl hover:shadow-lg transition-shadow bg-white">
              <div className="text-base font-bold text-blue-600 mb-2 uppercase tracking-wider">02. When</div>
              <h3 className="text-2xl font-bold mb-3">행위</h3>
              <p className="text-zinc-600 mb-4 text-base">사용자나 시스템이 행하는 액션</p>
              <div className="bg-zinc-100 p-3 rounded text-base text-zinc-700">
                ex) 사용자가 [이체 실행] 버튼을 클릭했을 때
              </div>
            </div>

            <div className="border border-zinc-200 p-6 rounded-xl hover:shadow-lg transition-shadow bg-white">
              <div className="text-base font-bold text-blue-600 mb-2 uppercase tracking-wider">03. Then</div>
              <h3 className="text-2xl font-bold mb-3">결과</h3>
              <p className="text-zinc-600 mb-4 text-base">액션 이후에 변하는 상태</p>
              <div className="bg-zinc-100 p-3 rounded text-base text-zinc-700">
                ex) 이체 완료 팝업이 뜨고, 계좌 잔액이 즉시 차감되어 화면에 표시됨
              </div>
            </div>

            <div className="border border-zinc-200 p-6 rounded-xl bg-red-50 border-red-100 hover:shadow-lg transition-shadow">
              <div className="text-base font-bold text-red-600 mb-2 uppercase tracking-wider">04. Exception</div>
              <h3 className="text-2xl font-bold mb-3 text-red-900">예외</h3>
              <p className="text-red-700 mb-4 text-base">정상 흐름을 벗어난 모든 케이스</p>
              <div className="bg-white p-3 rounded text-base text-red-800 border border-red-100">
                ex) 이체 한도 초과, 인증 번호 5회 오류, 일시적 네트워크 장애 발생 시 등
              </div>
            </div>
          </div>
        </div>
      </ParallaxSlide>


      {/* Slide 11: Examples */}
      <ParallaxSlide id="examples">
        <div className="text-zinc-500 font-bold mb-6 tracking-tight text-sm">[#별첨2]</div>
        <SectionTitle subtitle="EXAMPLE">룰 베이스 기획 예시</SectionTitle>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 w-full">

          {/* Bad Example */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-red-600 font-bold text-xl">
              <XCircle /> 전통적인 방식
            </div>
            <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 text-zinc-600 italic leading-relaxed">
              "로그인 화면에서 아이디와 비밀번호를 입력하고 로그인 버튼을 누른다. 로그인에 성공하면 메인으로 이동하고, 실패하면 에러 메시지를 보여준다."
            </div>
            <div className="pl-4 border-l-2 border-red-500 text-red-700 space-y-2">
              <p>QA: "아이디가 휴면 계정이면요?"</p>
              <p>QA: "비밀번호 5회 틀리면 어떻게 되나요?"</p>
              <p>QA: "에러 메시지 문구는 뭔가요?"</p>
            </div>
          </div>

          {/* Good Example */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-green-600 font-bold text-xl">
              <CheckCircle /> 룰 베이스 방식 예시 (Rule-based)
            </div>
            <div className="overflow-x-auto bg-white rounded-lg border border-zinc-200">
              <table className="w-full text-base text-left text-zinc-800">
                <thead className="text-base uppercase bg-zinc-100 text-zinc-500">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">조건 (If)</th>
                    <th className="px-4 py-3">행위 (When)</th>
                    <th className="px-4 py-3">결과 (Then)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-zinc-500">R-01</td>
                    <td className="px-4 py-3">유효한 ID/PW</td>
                    <td className="px-4 py-3 font-bold text-zinc-900">[로그인] 클릭</td>
                    <td className="px-4 py-3 text-green-600">'성공' 토스트 노출 후 main 이동</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 text-zinc-500">R-02</td>
                    <td className="px-4 py-3">PW 5회 미만 불일치</td>
                    <td className="px-4 py-3 font-bold text-zinc-900">[로그인] 클릭</td>
                    <td className="px-4 py-3">"비밀번호 불일치(N/5)" 메시지 노출</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-zinc-500">R-03</td>
                    <td className="px-4 py-3">PW 5회 이상 불일치</td>
                    <td className="px-4 py-3 font-bold text-zinc-900">[로그인] 클릭</td>
                    <td className="px-4 py-3 text-red-600">계정 잠금 및 'PW 재설정' 팝업</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 text-zinc-500">R-04</td>
                    <td className="px-4 py-3">휴면 계정</td>
                    <td className="px-4 py-3 font-bold text-zinc-900">[로그인] 클릭</td>
                    <td className="px-4 py-3">본인인증 페이지 이동</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ParallaxSlide>

      {/* Slide 12: Thank You */}
      <ParallaxSlide id="thankyou">
        <div className="flex flex-col h-full justify-center items-center text-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none keep-all mb-8">
              감사합니다
            </h1>
            <div className="mt-20 pt-12 border-t border-zinc-100 flex flex-col items-center gap-6">
              <div className="flex items-center gap-6">
                <div className="text-xl font-black tracking-widest text-zinc-300">IBK</div>
                <div className="w-px h-6 bg-zinc-200" />
                <div className="text-xl font-black tracking-widest text-zinc-300">SDS</div>
                <div className="w-px h-6 bg-zinc-200" />
                <div className="text-xl font-black tracking-widest text-zinc-300">ETRIBE</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSlide>
    </div>
  );
};

export default App;