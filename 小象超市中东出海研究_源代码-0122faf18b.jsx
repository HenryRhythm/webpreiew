import React, { useEffect, useRef, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  ShoppingBag,
  Globe,
  Clock,
  Users,
  ShoppingCart,
  MapPin,
  Shield,
  TrendingUp,
  Package,
  ChevronDown,
  ChevronUp,
  Flag,
  Home,
  Utensils,
  CreditCard,
  Languages,
  Database,
  Search,
  BarChart2,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MiddleEastMarketReport = () => {
  const [activeSection, setActiveSection] = useState('market');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    market: true,
    competitors: true,
    users: true,
    strategy: true,
    research: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // 市场数据
  const marketData = [
    { name: '沙特阿拉伯', value: 35 },
    { name: '阿联酋', value: 45 },
    { name: '其他GCC国家', value: 20 }
  ];

  const deliveryGrowthData = [
    { year: '2022', growth: 22 },
    { year: '2023', growth: 28 },
    { year: '2024', growth: 34 }
  ];

  // 竞品数据
  const competitorsData = [
    { name: 'Nana', delivery: '1小时', coverage: '本地连锁对接', color: '#8884d8' },
    { name: 'Talabat Mart', delivery: '30分钟', coverage: '便利店+自营仓', color: '#82ca9d' },
    { name: 'Carrefour Now', delivery: '小时达', coverage: '大卖场库存', color: '#ffc658' }
  ];

  // 用户画像数据
  const userProfileData = [
    { name: '白领年轻人', value: 35 },
    { name: '城市家庭', value: 40 },
    { name: '外籍居民', value: 25 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['market', 'competitors', 'users', 'strategy', 'research'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 平滑滚动
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-[#f5f7fa] to-[#e4edf5] text-[#2d3748] overflow-x-hidden">
      {/* 背景装饰 */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#4299e1] to-[#9f7aea] rounded-full filter blur-[60px] opacity-30 animate-blob z-[-2]"></div>
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#4299e1] to-[#9f7aea] rounded-full filter blur-[60px] opacity-30 animate-blob z-[-2]"></div>

      {/* 导航条 */}
      <nav className="sticky top-0 z-50 p-4 mb-8 bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text flex items-center">
            <ShoppingBag className="mr-2" /> 小象超市中东出海分析
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              { id: 'market', label: '市场环境', icon: <Globe size={16} className="mr-1" /> },
              { id: 'competitors', label: '竞品分析', icon: <ShoppingCart size={16} className="mr-1" /> },
              { id: 'users', label: '用户画像', icon: <Users size={16} className="mr-1" /> },
              { id: 'strategy', label: '出海策略', icon: <Flag size={16} className="mr-1" /> },
              { id: 'research', label: '研究框架', icon: <Search size={16} className="mr-1" /> }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center ${
                  activeSection === item.id
                    ? 'text-indigo-600'
                    : 'text-gray-600'
                } hover:text-indigo-600 transition-colors`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
          <button
            aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            className="md:hidden text-gray-600 p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* 移动端菜单 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 right-0 mt-2 mx-4 p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {[
                  { id: 'market', label: '市场环境', icon: <Globe size={16} className="mr-2" /> },
                  { id: 'competitors', label: '竞品分析', icon: <ShoppingCart size={16} className="mr-2" /> },
                  { id: 'users', label: '用户画像', icon: <Users size={16} className="mr-2" /> },
                  { id: 'strategy', label: '出海策略', icon: <Flag size={16} className="mr-2" /> },
                  { id: 'research', label: '研究框架', icon: <Search size={16} className="mr-2" /> }
                ].map(item => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 5 }}
                    className={`${
                      activeSection === item.id
                        ? 'text-indigo-600 font-medium bg-indigo-50'
                        : 'text-gray-600'
                    } hover:text-indigo-600 transition-colors text-left py-3 px-4 rounded-lg flex items-center`}
                  >
                    {item.icon}
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 头部横幅 */}
      <header className="container mx-auto py-16 px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            小象超市中东出海行业研究与竞品分析
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            聚焦海湾六国即时零售市场的机遇与挑战
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: '0 12px 28px 0 rgba(31, 38, 135, 0.2)',
              }}
              className="bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg p-4 text-center w-32"
            >
              <div className="text-sm text-gray-500 flex items-center justify-center">
                <Globe size={16} className="mr-1" /> 电商渗透率
              </div>
              <div className="text-2xl font-bold text-indigo-600">35-45%</div>
            </motion.div>
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: '0 12px 28px 0 rgba(31, 38, 135, 0.2)',
              }}
              className="bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg p-4 text-center w-32"
            >
              <div className="text-sm text-gray-500 flex items-center justify-center">
                <TrendingUp size={16} className="mr-1" /> 即时配送增长
              </div>
              <div className="text-2xl font-bold text-indigo-600">30%+</div>
            </motion.div>
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: '0 12px 28px 0 rgba(31, 38, 135, 0.2)',
              }}
              className="bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg p-4 text-center w-32"
            >
              <div className="text-sm text-gray-500 flex items-center justify-center">
                <Clock size={16} className="mr-1" /> 配送时间
              </div>
              <div className="text-2xl font-bold text-indigo-600">30分钟</div>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* 市场环境部分 */}
      <section id="market" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg p-8 mb-16"
        >
          <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => toggleSection('market')}>
            <h2 className="text-3xl font-bold flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] flex items-center justify-center text-white mr-3 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)]">
                <Globe size={20} />
              </div>
              市场环境初步判断
            </h2>
            {expandedSections.market ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>

          <AnimatePresence>
            {expandedSections.market && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <ShoppingBag className="mr-2" /> 电商渗透率
                    </h3>
                    <p className="mb-4">
                      海湾六国（GCC）中，沙特阿拉伯和阿联酋是中东电商渗透率最高的两个市场，分别达到
                      <span className="font-bold text-indigo-600"> ~35% </span>
                      与
                      <span className="font-bold text-indigo-600"> ~45% </span>
                      ，其中食品杂货类增长尤为显著。
                    </p>
                    
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={marketData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {marketData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Clock className="mr-2" /> 即时零售(Q-commerce)崛起
                    </h3>
                    <p className="mb-4">
                      2024年中东即时配送市场同比增长超过
                      <span className="font-bold text-indigo-600"> 30% </span>
                      ，高温、高频刚需促使用户对30分钟达的配送服务接受度提升。
                    </p>
                    
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={deliveryGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.05)" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="growth" fill="#8884d8" name="增长率(%)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <h4 className="font-semibold mt-6 mb-2 flex items-center">
                      <Package className="mr-2" /> 线下零售格局
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>大型超市（如 Carrefour、LuLu）+ 本地便利店构成线下主力</li>
                      <li>受限于覆盖面与本地SKU供给</li>
                      <li>各类"杂货速送 App"快速崛起，但仍在盈利模型探索中</li>
                      <li>用户粘性尚未完全建立</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 竞品分析部分 */}
      <section id="competitors" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg p-8 mb-16"
        >
          <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => toggleSection('competitors')}>
            <h2 className="text-3xl font-bold flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] flex items-center justify-center text-white mr-3 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)]">
                <ShoppingCart size={20} />
              </div>
              典型竞品扫描
            </h2>
            {expandedSections.competitors ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>

          <AnimatePresence>
            {expandedSections.competitors && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {competitorsData.map((competitor, index) => (
                    <motion.div
                      key={competitor.name}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-3" style={{ backgroundColor: competitor.color }}>
                          {index === 0 && <Home size={24} />}
                          {index === 1 && <Utensils size={24} />}
                          {index === 2 && <ShoppingBag size={24} />}
                        </div>
                        <h3 className="text-xl font-semibold">{competitor.name}</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2 text-gray-500" />
                          <span className="text-gray-700">配送时间: <span className="font-medium">{competitor.delivery}</span></span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-gray-500" />
                          <span className="text-gray-700">覆盖范围: <span className="font-medium">{competitor.coverage}</span></span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <ShoppingBag className="mr-2" /> 竞品特点补充
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-medium">Nana（沙特）</span>：已接入大量本地超市如 Panda、Danube，注重与本地供应商合作</li>
                    <li><span className="font-medium">Talabat Mart</span>：在阿联酋、科威特、卡塔尔等国布局"30分钟达"仓配体系</li>
                    <li><span className="font-medium">Carrefour Now</span>：用户多为已有超市忠诚度的中产用户</li>
                    <li>Deliveroo、Instashop 等平台也在探索食杂即时零售场景</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 用户画像部分 */}
      <section id="users" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg p-8 mb-16"
        >
          <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => toggleSection('users')}>
            <h2 className="text-3xl font-bold flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] flex items-center justify-center text-white mr-3 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)]">
                <Users size={20} />
              </div>
              用户消费行为画像
            </h2>
            {expandedSections.users ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>

          <AnimatePresence>
            {expandedSections.users && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="mr-2" /> 即时零售的核心用户
                    </h3>
                    
                    <div className="h-[250px] mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={userProfileData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {userProfileData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>白领年轻人、城市家庭、外籍居民（尤其在迪拜/利雅得）是高频使用群体</li>
                      <li>需求场景多集中在"下班路上想要吃晚饭""孩子需要生活用品紧急补货"等</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Search className="mr-2" /> 用户对平台的主要考量
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Clock size={18} className="mr-2 text-indigo-600" />
                          <span className="font-medium">履约速度 & 商品准确率</span>
                        </div>
                        <p className="text-gray-700 text-sm">极度依赖"按时到达+无缺货"</p>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Package size={18} className="mr-2 text-green-600" />
                          <span className="font-medium">商品品类覆盖是否本地化</span>
                        </div>
                        <p className="text-gray-700 text-sm">Halal食品、本地调味品等</p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CreditCard size={18} className="mr-2 text-purple-600" />
                          <span className="font-medium">支付方式与语言体验</span>
                        </div>
                        <p className="text-gray-700 text-sm">支持现金支付 + 阿拉伯语界面</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 出海策略部分 */}
      <section id="strategy" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg p-8 mb-16"
        >
          <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => toggleSection('strategy')}>
            <h2 className="text-3xl font-bold flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] flex items-center justify-center text-white mr-3 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)]">
                <Flag size={20} />
              </div>
              小象超市出海策略思考方向
            </h2>
            {expandedSections.strategy ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>

          <AnimatePresence>
            {expandedSections.strategy && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                        <ShoppingBag size={24} />
                      </div>
                      <h3 className="text-xl font-semibold">差异化定位</h3>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>聚焦"全品类+高履约+价格力"三要素</li>
                      <li>主打社区生活即时所需，而非仅限于生鲜或快消</li>
                      <li>可强调"中国式前置仓+强仓配"的高密度模型</li>
                      <li>在局部城市实现高频复购</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <MapPin size={24} />
                      </div>
                      <h3 className="text-xl font-semibold">履约网络建设</h3>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>借助美团在中国积累的仓储调度算法经验</li>
                      <li>快速搭建本地前置仓+骑手体系</li>
                      <li>初期可考虑与现有配送平台合作（如 Talabat 骑手网络）</li>
                      <li>降低冷启动成本</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <Shield size={24} />
                      </div>
                      <h3 className="text-xl font-semibold">本地合作与监管合规</h3>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>引入当地合伙人/品牌合作机制</li>
                      <li>解决许可证、物流人力雇佣等合规壁垒</li>
                      <li>优先从华人聚集区或中国企业聚集区（如阿联酋自贸区）切入</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 研究框架部分 */}
      <section id="research" className="container mx-auto py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-[10px] rounded-2xl border border-white/30 shadow-lg p-8 mb-16"
        >
          <div className="flex items-center justify-between mb-6 cursor-pointer" onClick={() => toggleSection('research')}>
            <h2 className="text-3xl font-bold flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] flex items-center justify-center text-white mr-3 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.5)]">
                <Database size={20} />
              </div>
              数据采集与研究框架
            </h2>
            {expandedSections.research ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>

          <AnimatePresence>
            {expandedSections.research && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">研究模块</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">建议数据来源</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分析方法</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">市场规模</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Statista、Euromonitor、政府公开数据</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">趋势预测、同比</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">用户行为</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">问卷调研、Google Trends、本地社媒话题</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">用户画像聚类分析</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">竞品商品结构</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">App采集、网页爬虫、线下门店实地观察</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SKU结构对比</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">履约体验与价格</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">多平台同城比价、测单配送时间</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">神秘用户测试法</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">品牌与合规动态</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">本地新闻、行业公众号、投资信息披露</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">案例追踪法</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 页脚 */}
      <footer className="container mx-auto py-8 px-4 md:px-8 text-center text-gray-500 text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <div>created by <a href="https://space.coze.cn" className="text-indigo-600 hover:underline">coze space</a></div>
          <div>页面内容均由 AI 生成，仅供参考</div>
        </div>
      </footer>
    </div>
  );
};

export default MiddleEastMarketReport;