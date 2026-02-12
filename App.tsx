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
  Rocket
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const TimelineItem = ({ label, start, end, color }: { label: string, start: number, end: number, color: string }) => {
  // Grid for M0 to M10 (11 points, 10 gaps)
  const left = `${(start / 10) * 100}%`;
  const width = `${((end - start) / 10) * 100}%`;

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 group">
      <div className="w-full md:w-64 text-base font-bold text-zinc-700 shrink-0 group-hover:text-blue-600 transition-colors">
        {label}
      </div>
      <div className="relative flex-grow h-4 md:h-8 bg-zinc-200/50 rounded-full overflow-hidden border border-zinc-100 shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: width }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`absolute h-full ${color} rounded-full shadow-lg shadow-black/5`}
          style={{ left }}
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative text-zinc-900 text-lg leading-relaxed">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Slide 0: 1. Project Understanding */}
      <ParallaxSlide isFirst={true}>
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
      <ParallaxSlide>
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
              <h3 className="text-2xl font-bold flex items-center gap-3 text-blue-700">
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
                      <td className="p-4 text-zinc-500 text-sm">개발자와 기획 단계부터 지속 논의</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">화면 정의서 작성</td>
                      <td className="p-4 text-zinc-600 keep-all">AI Pro SDD 입력 규격에 맞는 화면 정의서 작성<br />기존 화면 설계 외에 인수 조건(AC) 및 테스트 케이스 자연어 포함</td>
                      <td className="p-4 text-zinc-500 text-sm">SDS AI Pro 팀과 사전 협의 필요</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">사용자 여정 적용</td>
                      <td className="p-4 text-zinc-600 keep-all">화면 정의 시 기능 명세를 넘어, 사용자 여정의 목적과 비즈니스 로직이 포함된<br />인수 조건(AC)을 자연어로 기술</td>
                      <td className="p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.2 Design System */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-blue-700">
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
                      <td className="p-4 text-zinc-500 text-sm">IBK 기존 디자인 표준 현황 확인 후 범위 확정 필요</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">베리언트 설계</td>
                      <td className="p-4 text-zinc-600 keep-all">컴포넌트별 상태(State), 사이즈(Size), 테마(Theme) 베리언트 정의</td>
                      <td className="p-4 text-zinc-500 text-sm">FiCA 매칭을 위한 규격 준수</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">Figma 컴포넌트 라이브러리 구축</td>
                      <td className="p-4 text-zinc-600 keep-all">공통 UI 컴포넌트의 Figma 설계 및 프로퍼티 정의</td>
                      <td className="p-4 text-zinc-500 text-sm">개발팀과 지속 협의하며 진행</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-zinc-800">CX 디자인</td>
                      <td className="p-4 text-zinc-600">전체 화면 디자인 제작</td>
                      <td className="p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2.3 QC */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3 text-blue-700">
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
                      <td className="p-4 font-semibold text-zinc-800">FiCA 생성 코드 수정</td>
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

      {/* Slide 2: 2.4 Participation Scope Summary */}
      <ParallaxSlide>
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">Timeline</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Summary</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 keep-all">
            2.4 참여 범위 요약
          </h1>

          <div className="relative w-full max-w-5xl mx-auto mt-6 p-8 md:p-12 bg-zinc-50 rounded-3xl border border-zinc-200 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CalendarDays size={200} />
            </div>

            <div className="flex mb-10 px-1 font-mono text-sm md:text-base font-bold text-zinc-400 border-b border-zinc-200 pb-4">
              <div className="hidden md:block w-64 shrink-0 mr-6"></div>
              <div className="flex-grow flex justify-between">
                <span className="text-zinc-900">M0</span>
                <span>M1</span>
                <span>M2</span>
                <span>M3</span>
                <span>M4</span>
                <span>M5</span>
                <span className="text-blue-600">M6</span>
                <span>M7</span>
                <span>M8</span>
                <span>M9</span>
                <span className="text-blue-600">M10</span>
              </div>
            </div>

            <div className="space-y-6 relative z-10 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
              <div className="pb-6 border-b border-zinc-100">
                <TimelineItem label="PoC" start={0} end={1} color="bg-zinc-400" />
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 mb-2 text-blue-600 font-black uppercase tracking-widest text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  2.1 CX 기획
                </div>
                <TimelineItem label="분석/컴포넌트 식별 및 시나리오 작성" start={1} end={2} color="bg-blue-200" />
                <TimelineItem label="화면 정의서(AC) 및 SDD 입력 규격화" start={3} end={4} color="bg-blue-300" />
                <TimelineItem label="유저 저니 최적화 및 AI 지침 적용" start={5} end={6} color="bg-blue-400" />
                <TimelineItem label="글로벌 주요 화면 기획 (시스템 활용)" start={7} end={8} color="bg-blue-500" />
                <TimelineItem label="글로벌 서비스 검증 및 시나리오 테스트" start={9} end={10} color="bg-blue-600" />
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2 mb-2 text-indigo-600 font-black uppercase tracking-widest text-sm">
                  <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                  2.2 디자인 시스템
                </div>
                <TimelineItem label="토큰 설계 및 파운데이션 수립" start={1} end={2} color="bg-indigo-200" />
                <TimelineItem label="베리언트/Figma 구축 및 라이브러리" start={3} end={4} color="bg-indigo-300" />
                <TimelineItem label="CX 디자인 적용 및 표준화 완료" start={5} end={6} color="bg-indigo-400" />
                <TimelineItem label="글로벌 확장 UI 지원 및 유지보수" start={7} end={8} color="bg-indigo-500" />
                <TimelineItem label="시스템 디자인 가이드 최종 고도화" start={9} end={10} color="bg-indigo-600" />
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2 mb-2 text-zinc-600 font-black uppercase tracking-widest text-sm">
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  2.3 검증 및 품질
                </div>
                <TimelineItem label="QA 기준 수립 및 FiCA 가이드 검토" start={1} end={2} color="bg-zinc-200" />
                <TimelineItem label="코드 현행화 시작 및 수정/업데이트" start={3} end={4} color="bg-zinc-300" />
                <TimelineItem label="사용자 테스트 및 결과 리포트(LLM)" start={5} end={6} color="bg-zinc-400" />
                <TimelineItem label="퍼블리싱 코드 정밀 검증 및 피드백" start={7} end={8} color="bg-zinc-500" />
                <TimelineItem label="글로벌 통합 QA 및 최종 레포트 생성" start={9} end={10} color="bg-zinc-600" />
              </div>
            </div>

            <div className="mt-12 flex gap-8 text-sm text-zinc-500 border-t border-zinc-100 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                2.1 CX 기획
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                2.2 디자인 시스템
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                2.3 검증 및 품질
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide>

      {/* Slide 3: 3. Similar Experience */}
      <ParallaxSlide>
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
              <h3 className="text-2xl font-bold mb-4 keep-all leading-tight">3.1 SDS 오퍼스 기반 Figma 디자인 운영 (4년 이상)</h3>
              <ul className="space-y-3 text-zinc-600">
                <li><span className="font-bold text-zinc-900">기간:</span> 2021년~현재 (4년 이상 지속)</li>
                <li className="keep-all"><span className="font-bold text-zinc-900">내용:</span> SDS 본사와 오퍼스(원플랫폼) 기반 Figma 디자인 시스템 공동 구축 및 운영</li>
                <li className="keep-all"><span className="font-bold text-zinc-900">성과:</span> Figma Developer 계정을 활용한 퍼블리싱 소스 자동 생성 체계 정착</li>
                <li><span className="font-bold text-zinc-900">규모:</span> 기획/디자인 전 과정 수행</li>
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
      </ParallaxSlide>

      {/* Slide 4: 4. SDS Collaboration Plan (4.1) */}
      <ParallaxSlide>
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
                  <h4 className="text-2xl font-black">eTribe 영역</h4>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "디자인 시스템 설계",
                      "Figma 컴포넌트 라이브러리",
                      "CX 기획(AS-IS 분석 분류)",
                      "퍼블리싱 코드 검증 및 수정",
                      "접근성 표준 수립",
                      "코딩 컨벤션 수립/적용",
                      "FiCA 규격에 맞춘 Figma 디자인"
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
                  <div className="mt-10 p-4 bg-white/5 rounded-2xl text-purple-300 text-sm font-medium text-center italic">
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
      </ParallaxSlide>

      {/* Slide 5: 4.2 Collaboration Process */}
      <ParallaxSlide>
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">Roadmap</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Chapter 04</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-10 keep-all">
            4.2 협업 프로세스(안)
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto max-h-[70vh] pr-4 py-4">

            {/* Phase 1 */}
            <div className="relative p-8 bg-zinc-50 border border-zinc-200 rounded-3xl flex flex-col h-full hover:bg-white hover:shadow-2xl transition-all">
              <div className="absolute top-6 right-8 text-blue-600 font-black text-4xl opacity-10">01</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200">
                  <Milestone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase">M1 ~ M3</div>
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
                  <div className="text-xs font-bold text-indigo-600 uppercase">M3 ~ M6</div>
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
                  <div className="text-xs font-bold text-zinc-400 uppercase">M7 ~ M10</div>
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

          <div className="flex justify-center mt-12 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide>

      {/* Slide 6: 5. Suggestions and Requirements (NEW LOCATION) */}
      <ParallaxSlide>
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
                      <td className="p-5 text-zinc-500 text-sm italic keep-all font-mono">figma.on('documentchange', callback) 이벤트를 이용한 유사 플러그인 제작경험</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">2</td>
                      <td className="p-5 text-center font-bold text-zinc-900">생산성 및 품질</td>
                      <td className="p-5 font-bold text-zinc-900 keep-all">FiCA 룰베이스 기반 디스크립션 자동완성 피그마 플러그인 제공</td>
                      <td className="p-5 text-zinc-600 keep-all text-base">FiCA 룰 → Yaml 변환 → 피금마 플러그인 기반 제작. 오타 및 휴먼 에러 없는 데스크립션 작성 가능</td>
                      <td className="p-5 text-zinc-500 text-sm italic keep-all">AI 연동 없이 작업 하거나 AI 연동 시 추천 등 제시 가능 *</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">3</td>
                      <td className="p-5 text-center font-bold text-zinc-900">품질</td>
                      <td className="p-5 font-bold text-zinc-900 keep-all">FiCA 코딩컨벤션 제공</td>
                      <td className="p-5 text-zinc-600 keep-all text-base">디자인 시스템에 따른 IBK 코딩 컨벤션을 최적화 설계 및 지침으로 제공</td>
                      <td className="p-5 text-zinc-500 text-sm italic keep-all">자체 코딩컨벤션 기반 지침 이용한 퍼블리싱 자동화 업무 수준에서 진행중 (클로드 코드, 안티 그래비티) npm + ai API 기반 퍼블리싱 자동화 PoC 중</td>
                    </tr>
                    <tr>
                      <td className="p-5 text-center font-bold text-zinc-400">4</td>
                      <td className="p-5 text-center font-bold text-zinc-900">품질</td>
                      <td className="p-5 font-bold text-zinc-900 keep-all">FiCA 웹접근성 지침 및 코드 가이드 제공</td>
                      <td className="p-5 text-zinc-600 keep-all text-base">FiCA 룰 베이스 변환 과정에서 특정 시스템에 사용되어야 하는 속성 가이드 제공</td>
                      <td className="p-5 text-zinc-500 text-sm italic keep-all">자체 웹접근성 점검도구 및 크롤링 기반 웹접근성 점검 도구 보유중 (실무 도입 상태) 지침과 원칙 기반 (n8n + AI API 기반)</td>
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
      </ParallaxSlide>

      {/* Slide 7: Introduction (Chapter 01) */}
      <ParallaxSlide>
        <div className="flex flex-col h-full justify-center py-12">
          <div className="flex justify-between items-start border-b border-zinc-900 pb-6 mb-10">
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold text-blue-600">Rule-based Planning</span>
            <span className="text-lg md:text-xl uppercase tracking-widest font-bold">Chapter 01</span>
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight keep-all">
              이 요구사항은<br />무엇을 의미하는가?
            </h1>
            <div className="p-8 bg-zinc-50 border-l-4 border-blue-600 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <ChefHat className="text-blue-600" size={32} />
                <h3 className="text-2xl font-bold">요리 레시피와 같습니다.</h3>
              </div>
              <p className="text-xl md:text-2xl font-light opacity-80 keep-all leading-normal">
                "적당히 노릇하게 굽는다" 대신,<br />
                <strong>"중불에서 3분간, 표면이 갈색(#964B00)이 될 때까지 굽는다"</strong>라고 명시하는 것.
              </p>
            </div>
            <p className="text-lg text-zinc-600 keep-all">
              기획서를 읽는 QA나 개발자가 "이 상황에서는 어떻게 작동하죠?"라고 질문할 필요가 없도록<br />
              모든 경우의 수를 수식처럼 정의하라는 요구입니다.
            </p>
          </div>

          <div className="flex justify-center mt-16 animate-bounce text-zinc-400">
            <ArrowRight className="rotate-90" size={32} strokeWidth={1} />
          </div>
        </div>
      </ParallaxSlide>

      {/* Slide 8: Definition */}
      <ParallaxSlide>
        <SectionTitle subtitle="DEFINITION">룰 베이스(Rule-based) 기획서란?</SectionTitle>
        <div className="space-y-12">
          <p className="text-2xl font-medium keep-all">
            기획서의 문장이 자연어(사람의 언어)가 아닌, <br />
            <strong>논리적 조건과 결과의 집합</strong>으로 구성된 상태를 의미합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border border-red-100">
              <div className="flex items-center gap-3 mb-4 text-red-600">
                <XCircle />
                <h4 className="font-bold text-xl">기존 방식 (모호함)</h4>
              </div>
              <p className="text-xl text-zinc-700 italic">
                "사용자가 버튼을 누르면 결제가 진행된다."
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-4 text-blue-600">
                <CheckCircle />
                <h4 className="font-bold text-xl">룰 베이스 (명확함)</h4>
              </div>
              <p className="text-xl text-zinc-700 leading-relaxed keep-all">
                "사용자가 [결제] 버튼을 클릭했을 때,<br />
                <span className="font-bold text-blue-800">1. '잔액' ≥ '결제 금액'이면</span> '결제 완료' 프로세스 실행<br />
                <span className="font-bold text-blue-800">2. 그렇지 않으면</span> '잔액 부족' 팝업 노출"
              </p>
            </div>
          </div>
        </div>
      </ParallaxSlide>

      {/* Slide 9: 4 Elements (BDD) */}
      <ParallaxSlide>
        <SectionTitle subtitle="BDD ELEMENTS">기획서 필수 4요소</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          <div className="border border-zinc-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">01. If / Given</div>
            <h3 className="text-2xl font-bold mb-3">조건</h3>
            <p className="text-zinc-600 mb-4">행위가 일어나기 전의 시스템 상태</p>
            <div className="bg-zinc-100 p-3 rounded text-sm text-zinc-700">
              Ex) 유료 멤버십 회원이면서, 쿠폰을 보유하고 있을 때
            </div>
          </div>

          <div className="border border-zinc-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">02. When</div>
            <h3 className="text-2xl font-bold mb-3">행위</h3>
            <p className="text-zinc-600 mb-4">사용자나 시스템이 행하는 액션</p>
            <div className="bg-zinc-100 p-3 rounded text-sm text-zinc-700">
              Ex) [쿠폰 적용] 버튼을 클릭했을 때
            </div>
          </div>

          <div className="border border-zinc-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">03. Then</div>
            <h3 className="text-2xl font-bold mb-3">결과</h3>
            <p className="text-zinc-600 mb-4">액션 이후에 변하는 상태</p>
            <div className="bg-zinc-100 p-3 rounded text-sm text-zinc-700">
              Ex) 최종 결제 금액에서 10%가 차감되어 화면에 표시됨
            </div>
          </div>

          <div className="border border-zinc-200 p-6 rounded-xl bg-red-50 border-red-100 hover:shadow-lg transition-shadow">
            <div className="text-sm font-bold text-red-600 mb-2 uppercase tracking-wider">04. Exception</div>
            <h3 className="text-2xl font-bold mb-3 text-red-900">예외</h3>
            <p className="text-red-700 mb-4">정상 흐름을 벗어난 모든 케이스</p>
            <div className="bg-white p-3 rounded text-sm text-red-800 border border-red-100">
              Ex) 쿠폰 유효기간이 만료되었거나 이미 사용한 경우의 처리
            </div>
          </div>

        </div>
      </ParallaxSlide>

      {/* Slide 10: Why? */}
      <ParallaxSlide>
        <SectionTitle subtitle="WHY">왜 대형 IT 회사는 이것을 원하는가?</SectionTitle>
        <ContentGrid>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-12">

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-zinc-900 text-white p-4 rounded-full">
                <Terminal size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">1. QA 자동화 (Test Automation)</h3>
                <p className="text-lg text-zinc-600 leading-relaxed keep-all">
                  요즘 대기업은 사람이 일일이 버튼을 누르는 대신, 스크립트가 자동으로 테스트를 수행합니다.
                  자동화 스크립트는 "기획자의 마음"을 읽을 수 없습니다. 오직 <strong>'Input A → Output B'</strong>라는 명확한 규칙이 있어야만 코드로 옮길 수 있습니다.
                  룰 베이스 기획서는 그 자체로 <strong>자동화 시나리오의 설계도</strong>가 됩니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start border-t border-zinc-200 pt-12">
              <div className="bg-zinc-900 text-white p-4 rounded-full">
                <Layers size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">2. 조직 분업 및 병렬 작업</h3>
                <p className="text-lg text-zinc-600 leading-relaxed keep-all">
                  대규모 프로젝트에서는 기획이 끝나야 개발이 시작되고, 개발이 끝나야 QA가 시작되는 방식(Waterfall)을 쓰지 않습니다.
                  기획서가 룰 베이스로 작성되면, <strong>개발자가 코드를 짜는 동시에 QA는 테스트 케이스를 미리 작성</strong>할 수 있습니다.
                  즉, 기획서가 나오자마자 세 조직이 동시에 달릴 수 있는 "기준점"이 됩니다.
                </p>
              </div>
            </div>

          </div>
        </ContentGrid>
      </ParallaxSlide>

      {/* Slide 11: Examples */}
      <ParallaxSlide theme="dark">
        <SectionTitle subtitle="EXAMPLE" theme="dark">예시로 보는 차이</SectionTitle>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 w-full">

          {/* Bad Example */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-red-400 font-bold text-xl">
              <XCircle /> 잘못된 예시 (Vague Description)
            </div>
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 text-zinc-300 italic leading-relaxed">
              "로그인 화면에서 아이디와 비밀번호를 입력하고 로그인 버튼을 누른다. 로그인에 성공하면 메인으로 이동하고, 실패하면 에러 메시지를 보여준다."
            </div>
            <div className="pl-4 border-l-2 border-red-500 text-red-300 space-y-2">
              <p>QA: "아이디가 휴면 계정이면요?"</p>
              <p>QA: "비밀번호 5회 틀리면 어떻게 되나요?"</p>
              <p>QA: "에러 메시지 문구는 뭔가요?"</p>
            </div>
          </div>

          {/* Good Example */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-green-400 font-bold text-xl">
              <CheckCircle /> 룰 베이스 예시 (Rule-based)
            </div>
            <div className="overflow-x-auto bg-zinc-900 rounded-lg border border-zinc-700">
              <table className="w-full text-sm text-left text-zinc-300">
                <thead className="text-xs uppercase bg-zinc-800 text-zinc-400">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">조건 (If)</th>
                    <th className="px-4 py-3">행위 (When)</th>
                    <th className="px-4 py-3">결과 (Then)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr className="bg-zinc-900/50">
                    <td className="px-4 py-3 text-zinc-500">R-01</td>
                    <td className="px-4 py-3">유효한 ID/PW</td>
                    <td className="px-4 py-3 font-bold text-white">[로그인] 클릭</td>
                    <td className="px-4 py-3 text-green-400">'성공' 토스트 노출 후 /main 이동</td>
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-4 py-3 text-zinc-500">R-02</td>
                    <td className="px-4 py-3">PW 5회 미만 불일치</td>
                    <td className="px-4 py-3 font-bold text-white">[로그인] 클릭</td>
                    <td className="px-4 py-3">"비밀번호 불일치(N/5)" 메시지 노출</td>
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-4 py-3 text-zinc-500">R-03</td>
                    <td className="px-4 py-3">PW 5회 이상 불일치</td>
                    <td className="px-4 py-3 font-bold text-white">[로그인] 클릭</td>
                    <td className="px-4 py-3 text-red-400">계정 잠금 및 'PW 재설정' 팝업</td>
                  </tr>
                  <tr className="bg-zinc-900/50">
                    <td className="px-4 py-3 text-zinc-500">R-04</td>
                    <td className="px-4 py-3">휴면 계정</td>
                    <td className="px-4 py-3 font-bold text-white">[로그인] 클릭</td>
                    <td className="px-4 py-3">본인인증 페이지 이동</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </ParallaxSlide>

      {/* Slide 12: Checklist */}
      <ParallaxSlide>
        <SectionTitle subtitle="CHECKLIST">기획서 작성 체크리스트</SectionTitle>
        <div className="w-full max-w-4xl space-y-6">
          {[
            "모든 문장에 '누가(주체)', '언제(조건)', '무엇을(대상)', '어떻게(결과)'가 포함되어 있는가?",
            "'적절히', '화려하게', '친절하게' 같은 형용사를 모두 제거했는가?",
            "한 문장에 하나의 규칙(One Rule per Sentence)만 담겨 있는가?",
            "발생할 수 있는 모든 에러 상황(네트워크 끊김, 데이터 없음, 권한 없음 등)에 대한 결과값이 정의되었는가?",
            "특정 조건에 따라 화면이 변한다면, 그 조건을 '상태 값(Status Code)' 단위로 구분했는가?"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-zinc-50 transition-colors">
              <div className="mt-1 text-blue-600">
                <ListChecks size={24} />
              </div>
              <p className="text-xl text-zinc-800 font-medium keep-all">{item}</p>
            </div>
          ))}
        </div>
      </ParallaxSlide>

      {/* Slide 13: Conclusion */}
      <ParallaxSlide>
        <SectionTitle subtitle="CONCLUSION">결론: 기획자의 역할 확장</SectionTitle>
        <div className="flex flex-col items-center text-center max-w-3xl space-y-10">
          <div className="p-6 bg-zinc-100 rounded-full">
            <BrainCircuit size={48} className="text-zinc-800" strokeWidth={1.5} />
          </div>

          <h3 className="text-3xl md:text-5xl font-bold leading-tight keep-all">
            '화면 설계자'를 넘어<br />
            <span className="text-blue-600">'시스템 설계자'</span>가 되십시오.
          </h3>

          <p className="text-xl text-zinc-600 leading-relaxed keep-all">
            과거의 기획자가 "사용자가 보기에 예쁘고 편한 화면"을 고민했다면,
            룰 베이스를 요구받는 기획자는 <strong>시스템의 전체 로직(Business Logic)을 설계하고 통제하는 역할</strong>을 수행해야 합니다.
          </p>
        </div>
      </ParallaxSlide>

    </div>
  );
};

export default App;