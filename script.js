// ==================== 内置默认技能树数据（部署后用户打开就能看到）====================
const DEFAULT_SKILL_TREE_DATA = {
    "canvasData": {
        "canvas_1771917190429": {
            "name": "箭术",
            "skills": [
                {
                    "id": "1771917230881",
                    "name": "箭术入门",
                    "description": "使用弓箭时可对直线目标进行一次射击判定，技能每提升1级，命中点数+1。",
                    "parentIds": [],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 200,
                    "y": 100,
                    "cost": 500,
                    "levelCost": 500
                },
                {
                    "id": "1771917247221",
                    "name": "连珠",
                    "description": "连续进行两次劣势射击判定，技能每提升1级，判定点数+1。",
                    "parentIds": ["1771917230881"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 50,
                    "y": 400,
                    "cost": 3000,
                    "levelCost": 2000
                },
                {
                    "id": "1771917796753",
                    "name": "弩箭入门",
                    "description": "使用弩箭可对直线目标进行一次射击判定，技能每提升1级，命中点数+1。",
                    "parentIds": [],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 520,
                    "y": 100,
                    "cost": 0,
                    "levelCost": 0
                },
                {
                    "id": "1771920049179",
                    "name": "白矢",
                    "description": "进行一次优势判定且判定点数+2。技能每提升1级，判定点数额外+2。使用后无法移动。移动后无法使用。",
                    "parentIds": ["1771917230881"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 350,
                    "y": 400,
                    "cost": 3000,
                    "levelCost": 2000
                },
                {
                    "id": "1771920193141",
                    "name": "断骨",
                    "description": "进行一次射击检定，检定成功后伤害结果+2且目标本回合无法移动。技能每提升1级，投掷结果+1。",
                    "parentIds": ["1771917796753"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 520,
                    "y": 400,
                    "cost": 0,
                    "levelCost": 0
                },
                {
                    "id": "1771982671576",
                    "name": "速射",
                    "description": "你的连珠不再为劣势判定，且判定点数在15以上时造成的伤害额外+1，技能每提升1级判定结果+1。",
                    "parentIds": ["1771917247221"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 50,
                    "y": 700,
                    "cost": 10000,
                    "levelCost": 3000
                },
                {
                    "id": "1771983011112",
                    "name": "神射",
                    "description": "你的白矢不再受到移动惩罚。若判定点数大于15，额外造成1点伤害，且超出15的部分每满 3 点，伤害再额外+1。技能每提升1级判定要求的点数-1。",
                    "parentIds": ["1771920049179"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 350,
                    "y": 700,
                    "cost": 10000,
                    "levelCost": 3000
                },
                {
                    "id": "1771983744305",
                    "name": "参连",
                    "description": "进行普通射击判定命中后，可投掷1D6进行连射判定，投掷结果≥3立即进行一次额外射击判定。（连射次数上限2次）\n技能每提升1级，连射次数上限+1。",
                    "parentIds": ["1771982671576"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 50,
                    "y": 1000,
                    "cost": 10000,
                    "levelCost": 3000
                },
                {
                    "id": "1771983953656",
                    "name": "剡注",
                    "description": "进行一次无需命中判定的射击，投掷1D4，投掷的点数为本次射击的额外伤害。技能每提升1级造成的额外伤害基础+1。",
                    "parentIds": ["1771983011112"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 350,
                    "y": 1000,
                    "cost": 10000,
                    "levelCost": 3000
                },
                {
                    "id": "1771985553222",
                    "name": "伏弩",
                    "description": "进入伏击状态，无法移动。本回合内敌方单位行动时均可对其进行一次射击检定。移动后无法使用。技能每提升1级检定命中点数+1。",
                    "parentIds": ["1771985752392"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 520,
                    "y": 1000,
                    "cost": 0,
                    "levelCost": 0
                },
                {
                    "id": "1771985752392",
                    "name": "追影",
                    "description": "你使用断骨命中后，可额外选择射程内的另一目标使用断骨（可享受断骨技能加成）。技能每提升1点，额外射击检定结果+1。本次射击命中点数每＞目标闪避值2点伤害结果+1。",
                    "parentIds": ["1771920193141"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 520,
                    "y": 700,
                    "cost": 0,
                    "levelCost": 0
                },
                {
                    "id": "1771986406350",
                    "name": "惊鸿",
                    "description": "最多选择4名目标，对齐分别使用连珠/白矢/惨连/剡注各1次，由玩家自行分配。技能每提升1级，伤害结果+1。使用后弓必定损坏。",
                    "parentIds": ["1771983953656", "1771983744305"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 188.79998779296875,
                    "y": 1291.60009765625,
                    "cost": 30000,
                    "levelCost": 5000
                },
                {
                    "id": "1771986612051",
                    "name": "七星",
                    "description": "对目标连续进行7次射击判定，每次命中后下次射击投掷点数-3，直至未命中后停止射击。技能每提升1级判定结果+1。",
                    "parentIds": ["1771985553222"],
                    "icon": "🎯",
                    "level": 0,
                    "completed": false,
                    "x": 520,
                    "y": 1300,
                    "cost": 0,
                    "levelCost": 0
                }
            ]
        },
        "canvas_1771991102931": {
            "name": "格斗",
            "skills": []
        }
    },
    "currentCanvasId": "canvas_1771917190429"
};

// ==================== 多画布技能树管理系统 - 无限画布版（关联高亮增强版） ====================
class SkillTreeManager {
    constructor() {
        // 核心数据：多画布管理
        this.canvasData = {}; // 格式：{ canvasId: { name: '画布名称', skills: [] }, ... }
        this.currentCanvasId = ''; // 当前激活的画布ID
        this.canvas = document.getElementById('skillCanvas');
        this.selectedSkill = null;
        
        // 多选功能支持
        this.selectedSkills = new Set(); // 存储多个选中的技能ID
        this.isMultiSelectMode = false; // Ctrl键多选模式
        
        // 画布拖拽相关
        this.isDraggingSkill = false;
        this.draggedSkillId = null;
        this.dragOffset = { x: 0, y: 0 };
        
        // 缩放因子（控制元素实际尺寸，0.5-2倍）
        this.scaleFactor = 1;
        // 基础尺寸（缩放的基准）
        this.baseSizes = {
            nodeWidth: 120,
            nodeHeight: 140,
            iconSize: 32,
            fontSize: 14,
            starSize: 18,
            lineWidth: 2
        };
        // 核心配置：最多父级数量
        this.maxParentCount = 4;

        // 关联高亮状态
        this.highlightMode = true; // 默认开启关联高亮
        this.highlightedSkills = new Set(); // 存储高亮显示的技能ID
        this.hoveredSkill = null; // 当前鼠标悬停的技能

        // 扩展技能图标库（40+预设图标）
        this.skillIcons = [
            '🎯', '🌟', '🔥', '⚡', '💡', '❤️', '💪', '🎨', '🎵', '🎮',
            '📝', '📚', '🧮', '🧪', '🧑‍💻', '🧑‍🏫', '🧑‍🍳', '🧑‍🔧', '🧑‍🚒', '🧑‍⚕️',
            '🧑‍✈️', '🧑‍🚀', '🧑‍🌾', '🧑‍🎨', '🧑‍🎤', '🧑‍🎓', '🧑‍🏭', '🧑‍💼', '🧑‍🔬', '🧑‍🩹',
            '🧑‍🍼', '🧹', '🧺', '🧻', '🛠️', '🛡️', '📸', '📹', '🎙️', '📊',
            '📈', '📉', '🔍', '🔧', '🔨', '⚙️', '🪛', '🧰', '🗺️'
        ];
        
        // 等级配置
        this.levelConfig = [
            { stars: 0, name: '未入门', min: 0, max: 0 },
            { stars: 1, name: '入门', min: 1, max: 1 },
            { stars: 2, name: '熟练', min: 2, max: 2 },
            { stars: 3, name: '精通', min: 3, max: 3 },
            { stars: 4, name: '专家', min: 4, max: 4 },
            { stars: 5, name: '大师', min: 5, max: 5 }
        ];
        
        // 初始化流程
        this.initializeEventListeners();
        this.loadCanvasData(); // 加载多画布数据
        this.ensureDefaultCanvas(); // 确保有默认画布
        this.switchCanvas(this.currentCanvasId); // 切换到当前画布
        this.checkFirstVisit();
        this.updateStatistics();
        this.bindLevelSliderEvent();
        this.bindCanvasZoomEvents();
        this.initIconSelect();
        this.initParentSelectors(); // 初始化4个父级选择框
        this.updateCanvasSelector(); // 更新画布选择下拉框

        // 初始化关联高亮功能
        this.initHighlightControls();
        this.initQuickActions();
        this.initSelectionBox();

        // ========== 修复节点不可见：初始化画布滚动位置 ==========
        const canvasContainer = document.getElementById('canvasContainer');
        if (canvasContainer) {
            canvasContainer.scrollLeft = 0;
            canvasContainer.scrollTop = 0;
        }
        // 强制重置视图（确保缩放和位置正确）
        this.resetView();
    }

    // ==================== 画布管理核心方法 ====================
    /**
     * 确保存在默认画布
     */
    ensureDefaultCanvas() {
        const canvasIds = Object.keys(this.canvasData);
        if (canvasIds.length === 0) {
            // 创建默认画布
            const defaultCanvasId = 'canvas_' + Date.now();
            this.canvasData[defaultCanvasId] = {
                name: '默认画布',
                skills: []
            };
            this.currentCanvasId = defaultCanvasId;
            this.saveCanvasData();
        } else {
            // 使用第一个画布作为当前画布（如果未设置）
            if (!this.currentCanvasId || !this.canvasData[this.currentCanvasId]) {
                this.currentCanvasId = canvasIds[0];
            }
        }
        // 更新当前画布名称显示
        this.updateCurrentCanvasName();
    }

    /**
     * 加载本地存储的多画布数据
     */
    loadCanvasData() {
        const savedData = localStorage.getItem('multiCanvasSkillTreeData');
        
        let dataToLoad;
        if (!savedData) {
            // 如果没有保存的数据，使用内置的默认技能树数据
            dataToLoad = JSON.parse(JSON.stringify(DEFAULT_SKILL_TREE_DATA)); // 深拷贝防止污染
        } else {
            dataToLoad = JSON.parse(savedData);
        }

        try {
            this.canvasData = dataToLoad.canvasData || {};
            this.currentCanvasId = dataToLoad.currentCanvasId || '';
            
            // 兼容旧数据，确保每个画布的父级最多4个
            Object.keys(this.canvasData).forEach(canvasId => {
                const canvas = this.canvasData[canvasId];
                if (canvas.skills && Array.isArray(canvas.skills)) {
                    canvas.skills = canvas.skills.map(skill => {
                        let parentIds = [];
                        if (skill.parentId && !skill.parentIds) {
                            parentIds = [skill.parentId];
                        } else if (skill.parentIds) {
                            parentIds = Array.isArray(skill.parentIds) ? skill.parentIds : [skill.parentIds];
                        }
                        return {
                            ...skill,
                            parentIds: parentIds.slice(0, this.maxParentCount), // 最多4个父级
                            level: skill.level || 0,
                            icon: skill.icon || '🎯',
                            x: skill.x || 200, // 修复：默认x坐标改为200（可视区域）
                            y: skill.y || 200, // 修复：默认y坐标改为200（可视区域）
                            completed: skill.completed || (skill.level >= 5),
                            cost: skill.cost || 0,  // 【新增】为旧数据提供默认金钱值
                            levelCost: skill.levelCost || 0  // 【新增】为旧数据提供默认升级花费
                        };
                    });
                }
            });
        } catch (e) {
            console.error('加载画布数据失败：', e);
            // 加载失败时也优先使用内置默认数据
            const defaultData = JSON.parse(JSON.stringify(DEFAULT_SKILL_TREE_DATA));
            this.canvasData = defaultData.canvasData || {};
            this.currentCanvasId = defaultData.currentCanvasId || '';
        }
    }

    /**
     * 保存多画布数据到本地存储
     */
    saveCanvasData() {
        const saveData = {
            canvasData: this.canvasData,
            currentCanvasId: this.currentCanvasId
        };
        localStorage.setItem('multiCanvasSkillTreeData', JSON.stringify(saveData));
    }

    /**
     * 获取当前画布的技能数据
     */
    getCurrentSkills() {
        if (!this.canvasData[this.currentCanvasId]) {
            return [];
        }
        return this.canvasData[this.currentCanvasId].skills || [];
    }

    /**
     * 设置当前画布的技能数据
     */
    setCurrentSkills(skills) {
        if (!this.canvasData[this.currentCanvasId]) {
            this.canvasData[this.currentCanvasId] = { name: '未命名画布', skills: [] };
        }
        this.canvasData[this.currentCanvasId].skills = skills;
        this.saveCanvasData();
    }

    /**
     * 创建新画布
     */
    createNewCanvas() {
        const canvasId = 'canvas_' + Date.now();
        const canvasName = `画布${Object.keys(this.canvasData).length + 1}`;
        
        // 添加新画布
        this.canvasData[canvasId] = {
            name: canvasName,
            skills: []
        };
        
        // 切换到新画布
        this.switchCanvas(canvasId);
        
        // 保存并更新UI
        this.saveCanvasData();
        this.updateCanvasSelector();
        this.updateCurrentCanvasName();
        
        // 提示信息
        this.showUnlockNotification({ name: canvasName, level: 0 }, `${canvasName} 创建成功！`);
    }

    /**
     * 切换画布
     */
    switchCanvas(canvasId) {
        if (!this.canvasData[canvasId]) return;
        
        this.currentCanvasId = canvasId;
        this.selectedSkill = null;
        this.selectedSkills.clear();
        this.highlightedSkills.clear();
        this.hoveredSkill = null;
        
        // 清空技能信息面板
        this.clearSkillInfo();
        
        // 重新渲染技能树
        this.renderSkillTree();
        
        // 更新统计信息
        this.updateStatistics();
        
        // 保存并更新UI
        this.saveCanvasData();
        this.updateCurrentCanvasName();
        
        // 【新增】更新专精类别的选中项
        const specialtyType = document.getElementById('specialtyType');
        if (specialtyType) {
            const currentCanvasName = this.canvasData[this.currentCanvasId]?.name || '';
            specialtyType.value = currentCanvasName;
        }

        // 修复：切换画布后滚动到左上角
        const canvasContainer = document.getElementById('canvasContainer');
        if (canvasContainer) {
            canvasContainer.scrollLeft = 0;
            canvasContainer.scrollTop = 0;
        }
    }

    /**
     * 重命名画布
     */
    renameCanvas(newName) {
        if (!this.currentCanvasId || !newName.trim()) return;
        
        this.canvasData[this.currentCanvasId].name = newName.trim();
        this.saveCanvasData();
        this.updateCanvasSelector();
        this.updateCurrentCanvasName();
        
        this.showUnlockNotification({ name: newName, level: 0 }, `画布已重命名为：${newName}`);
    }

    /**
     * 删除当前画布
     */
    deleteCurrentCanvas() {
        const canvasCount = Object.keys(this.canvasData).length;
        if (canvasCount <= 1) {
            alert('❌ 至少保留一个画布，无法删除！');
            return;
        }
        
        const canvasName = this.canvasData[this.currentCanvasId].name;
        if (!confirm(`⚠️ 确定要删除画布「${canvasName}」吗？此操作不可恢复！`)) return;
        
        // 删除当前画布
        delete this.canvasData[this.currentCanvasId];
        
        // 切换到第一个可用画布
        const remainingCanvasIds = Object.keys(this.canvasData);
        this.currentCanvasId = remainingCanvasIds[0];
        
        // 保存并更新UI
        this.saveCanvasData();
        this.switchCanvas(this.currentCanvasId);
        this.updateCanvasSelector();
        this.updateCurrentCanvasName();
        
        this.showUnlockNotification({ name: canvasName, level: 0 }, `画布「${canvasName}」已删除`);
    }

    /**
     * 更新画布选择下拉框
     */
    updateCanvasSelector() {
        const selector = document.getElementById('canvasSelector');
        if (!selector) return;
        
        selector.innerHTML = '';
        const canvasIds = Object.keys(this.canvasData);
        
        canvasIds.forEach(canvasId => {
            const canvas = this.canvasData[canvasId];
            const option = document.createElement('option');
            option.value = canvasId;
            option.textContent = canvas.name;
            if (canvasId === this.currentCanvasId) {
                option.selected = true;
            }
            selector.appendChild(option);
        });
        
        // 【新增】同时更新专精类别选择框
        this.updateSpecialtyTypeSelector();
    }

    /**
     * 【新增】根据现有画布更新专精类别下拉框
     */
    updateSpecialtyTypeSelector() {
        const specialtyType = document.getElementById('specialtyType');
        if (!specialtyType) return;
        
        // 获取所有现有画布的名称作为选项
        const canvasNames = Object.values(this.canvasData).map(canvas => canvas.name);
        const currentCanvasName = this.canvasData[this.currentCanvasId]?.name || '';
        
        // 清空现有选项（保留自定义输入框）
        const existingOptions = Array.from(specialtyType.querySelectorAll('option'));
        existingOptions.forEach(opt => opt.remove());
        
        // 添加所有现有画布作为选项
        canvasNames.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            specialtyType.appendChild(option);
        });
        
        // 设置当前选中的选项
        specialtyType.value = currentCanvasName;
    }

    /**
     * 更新当前画布名称显示
     */
    updateCurrentCanvasName() {
        const nameElement = document.getElementById('currentCanvasName');
        if (!nameElement || !this.canvasData[this.currentCanvasId]) return;
        
        nameElement.textContent = `当前画布：${this.canvasData[this.currentCanvasId].name}`;
    }

    // ==================== 关联高亮功能初始化 ====================
    /**
     * 初始化关联高亮控制
     */
    initHighlightControls() {
        // 切换高亮模式按钮
        const toggleBtn = document.getElementById('toggleHighlightBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.highlightMode = !this.highlightMode;
                toggleBtn.textContent = this.highlightMode ? '关闭高亮模式' : '开启高亮模式';
                
                if (!this.highlightMode) {
                    this.clearHighlight();
                }
                
                this.showUnlockNotification(
                    { name: '高亮模式', level: 0 },
                    `关联高亮模式已${this.highlightMode ? '开启' : '关闭'}`
                );
            });
        }

        // 关闭高亮提示框
        const closeTooltipBtn = document.getElementById('closeHighlightTooltip');
        if (closeTooltipBtn) {
            closeTooltipBtn.addEventListener('click', () => {
                this.hideHighlightTooltip();
            });
        }

        // 更新关联技能统计
        this.updateRelatedSkillsCount();
    }

    /**
     * 初始化快捷操作按钮
     */
    initQuickActions() {
        const bindQuickAction = (id, callback) => {
            const btn = document.getElementById(id);
            if (btn) btn.addEventListener('click', callback);
        };

        bindQuickAction('quickEditBtn', () => {
            if (this.selectedSkill) {
                this.editSkill(this.selectedSkill);
            } else if (this.selectedSkills.size === 1) {
                const skillId = Array.from(this.selectedSkills)[0];
                this.editSkill(skillId);
            } else {
                alert('请先选择一个技能');
            }
        });

        bindQuickAction('quickUpgradeBtn', () => {
            if (this.selectedSkill) {
                this.upgradeSkill(this.selectedSkill);
            } else if (this.selectedSkills.size === 1) {
                const skillId = Array.from(this.selectedSkills)[0];
                this.upgradeSkill(skillId);
            } else {
                alert('请先选择一个技能');
            }
        });

        bindQuickAction('quickDeleteBtn', () => {
            if (this.selectedSkill) {
                this.deleteSkill(this.selectedSkill);
            } else if (this.selectedSkills.size === 1) {
                const skillId = Array.from(this.selectedSkills)[0];
                this.deleteSkill(skillId);
            } else if (this.selectedSkills.size > 1) {
                if (confirm(`确定要删除选中的 ${this.selectedSkills.size} 个技能吗？`)) {
                    this.selectedSkills.forEach(skillId => {
                        this.deleteSkill(skillId);
                    });
                    this.selectedSkills.clear();
                }
            } else {
                alert('请先选择要删除的技能');
            }
        });

        bindQuickAction('highlightRelatedBtn', () => {
            if (this.selectedSkill) {
                this.highlightRelatedSkills(this.selectedSkill);
            } else if (this.selectedSkills.size === 1) {
                const skillId = Array.from(this.selectedSkills)[0];
                this.highlightRelatedSkills(skillId);
            } else {
                alert('请先选择一个技能来查看关联');
            }
        });

        // 信息面板折叠按钮
        const toggleInfoBtn = document.getElementById('toggleInfoPanel');
        if (toggleInfoBtn) {
            toggleInfoBtn.addEventListener('click', () => {
                const infoPanel = document.getElementById('skillInfo');
                infoPanel.classList.toggle('collapsed');
                toggleInfoBtn.textContent = infoPanel.classList.contains('collapsed') ? '▶' : '◀';
            });
        }
    }

    /**
     * 初始化框选功能
     */
    initSelectionBox() {
        this.isSelecting = false;
        this.selectionStart = { x: 0, y: 0 };
        this.selectionBox = document.getElementById('selectionBox');
        this.canvasContainer = document.getElementById('canvasContainer');

        if (!this.selectionBox || !this.canvasContainer) return;

        // 鼠标按下开始框选
        this.canvasContainer.addEventListener('mousedown', (e) => {
            // 只在画布空白处（非技能节点）且未按下Ctrl键时开始框选
            if (e.target === this.canvasContainer || e.target === this.canvas) {
                if (!e.ctrlKey) {
                    this.selectedSkills.clear();
                    this.renderSkillTree();
                }
                this.startSelection(e);
            }
        });

        // 鼠标移动更新框选
        document.addEventListener('mousemove', (e) => {
            if (this.isSelecting) {
                this.updateSelection(e);
            }
        });

        // 鼠标抬起结束框选
        document.addEventListener('mouseup', (e) => {
            if (this.isSelecting) {
                this.endSelection();
            }
        });
    }

    /**
     * 开始框选
     */
    startSelection(e) {
        this.isSelecting = true;
        const rect = this.canvasContainer.getBoundingClientRect();
        const scrollLeft = this.canvasContainer.scrollLeft;
        const scrollTop = this.canvasContainer.scrollTop;
        
        this.selectionStart = {
            x: e.clientX - rect.left + scrollLeft,
            y: e.clientY - rect.top + scrollTop
        };
        
        this.selectionBox.style.left = `${this.selectionStart.x}px`;
        this.selectionBox.style.top = `${this.selectionStart.y}px`;
        this.selectionBox.style.width = '0';
        this.selectionBox.style.height = '0';
        this.selectionBox.style.display = 'block';
    }

    /**
     * 更新框选区域
     */
    updateSelection(e) {
        if (!this.isSelecting) return;
        
        const rect = this.canvasContainer.getBoundingClientRect();
        const scrollLeft = this.canvasContainer.scrollLeft;
        const scrollTop = this.canvasContainer.scrollTop;
        
        const currentX = e.clientX - rect.left + scrollLeft;
        const currentY = e.clientY - rect.top + scrollTop;
        
        const width = currentX - this.selectionStart.x;
        const height = currentY - this.selectionStart.y;
        
        this.selectionBox.style.width = `${Math.abs(width)}px`;
        this.selectionBox.style.height = `${Math.abs(height)}px`;
        this.selectionBox.style.left = `${width < 0 ? currentX : this.selectionStart.x}px`;
        this.selectionBox.style.top = `${height < 0 ? currentY : this.selectionStart.y}px`;
    }

    /**
     * 结束框选
     */
    endSelection() {
        if (!this.isSelecting) return;
        
        this.isSelecting = false;
        this.selectionBox.style.display = 'none';
        
        // 获取框选区域
        const selectionRect = this.selectionBox.getBoundingClientRect();
        const canvasRect = this.canvasContainer.getBoundingClientRect();
        const scrollLeft = this.canvasContainer.scrollLeft;
        const scrollTop = this.canvasContainer.scrollTop;
        
        // 转换坐标
        const selection = {
            left: selectionRect.left - canvasRect.left + scrollLeft,
            top: selectionRect.top - canvasRect.top + scrollTop,
            right: selectionRect.right - canvasRect.left + scrollLeft,
            bottom: selectionRect.bottom - canvasRect.top + scrollTop
        };
        
        // 查找在框选区域内的技能节点
        const skills = this.getCurrentSkills();
        skills.forEach(skill => {
            const node = document.querySelector(`[data-skill-id="${skill.id}"]`);
            if (node) {
                const nodeRect = node.getBoundingClientRect();
                const nodeCanvasPos = {
                    left: nodeRect.left - canvasRect.left + scrollLeft,
                    top: nodeRect.top - canvasRect.top + scrollTop,
                    right: nodeRect.right - canvasRect.left + scrollLeft,
                    bottom: nodeRect.bottom - canvasRect.top + scrollTop
                };
                
                // 检查是否在框选区域内
                if (nodeCanvasPos.left >= selection.left &&
                    nodeCanvasPos.right <= selection.right &&
                    nodeCanvasPos.top >= selection.top &&
                    nodeCanvasPos.bottom <= selection.bottom) {
                    
                    this.toggleSkillSelection(skill.id, true);
                }
            }
        });
    }

    /**
     * 切换技能选择状态
     */
    toggleSkillSelection(skillId, additive = false) {
        if (!additive) {
            this.selectedSkills.clear();
            this.selectedSkill = skillId;
        }
        
        if (this.selectedSkills.has(skillId)) {
            this.selectedSkills.delete(skillId);
        } else {
            this.selectedSkills.add(skillId);
        }
        
        this.renderSkillTree();
    }

    // ==================== 关联高亮核心功能 ====================
    /**
     * 高亮显示关联技能
     */
    highlightRelatedSkills(skillId) {
        if (!this.highlightMode) return;
        
        this.clearHighlight();
        this.highlightedSkills.clear();
        
        const skills = this.getCurrentSkills();
        const skill = skills.find(s => s.id === skillId);
        if (!skill) return;
        
        // 添加当前技能
        this.highlightedSkills.add(skillId);
        
        // 查找父级技能
        const parentIds = skill.parentIds || [];
        parentIds.forEach(parentId => {
            if (parentId) {
                this.highlightedSkills.add(parentId);
            }
        });
        
        // 查找子级技能
        skills.forEach(s => {
            if (s.parentIds && s.parentIds.includes(skillId)) {
                this.highlightedSkills.add(s.id);
            }
        });
        
        // 更新显示
        this.updateHighlight();
        
        // 显示关联技能提示框
        this.showHighlightTooltip(skill);
    }

    /**
     * 更新高亮显示
     */
    updateHighlight() {
        // 更新技能节点高亮
        document.querySelectorAll('.skill-node').forEach(node => {
            const skillId = node.dataset.skillId;
            if (this.highlightedSkills.has(skillId)) {
                node.classList.add('related-highlight');
            } else {
                node.classList.remove('related-highlight');
            }
        });
        
        // 更新连接线高亮
        document.querySelectorAll('.connection-line').forEach(line => {
            line.classList.remove('related-highlight');
        });
        
        // 更新关联技能数量统计
        this.updateRelatedSkillsCount();
    }

    /**
     * 清除所有高亮
     */
    clearHighlight() {
        this.highlightedSkills.clear();
        
        document.querySelectorAll('.skill-node').forEach(node => {
            node.classList.remove('related-highlight');
        });
        
        document.querySelectorAll('.connection-line').forEach(line => {
            line.classList.remove('related-highlight');
        });
        
        this.hideHighlightTooltip();
    }

    /**
     * 显示关联技能提示框
     */
    showHighlightTooltip(skill) {
        const tooltip = document.getElementById('highlightTooltip');
        const parentList = document.getElementById('parentSkillsList');
        const childList = document.getElementById('childSkillsList');
        
        if (!tooltip || !parentList || !childList) return;
        
        const skills = this.getCurrentSkills();
        
        // 构建父级技能列表
        let parentHtml = '';
        const parentIds = skill.parentIds || [];
        if (parentIds.length > 0) {
            parentHtml = '<h5>父级技能：</h5>';
            parentIds.forEach(parentId => {
                if (parentId) {
                    const parent = skills.find(s => s.id === parentId);
                    if (parent) {
                        parentHtml += `
                            <div class="related-skill-item">
                                <span class="skill-icon">${parent.icon || '🎯'}</span>
                                ${parent.name} (${this.getLevelInfo(parent.level).name})
                            </div>
                        `;
                    }
                }
            });
        } else {
            parentHtml = '<h5>父级技能：无</h5>';
        }
        
        // 构建子级技能列表
        let childHtml = '';
        const children = skills.filter(s => 
            s.parentIds && s.parentIds.includes(skill.id)
        );
        if (children.length > 0) {
            childHtml = '<h5>子级技能：</h5>';
            children.forEach(child => {
                childHtml += `
                    <div class="related-skill-item">
                        <span class="skill-icon">${child.icon || '🎯'}</span>
                        ${child.name} (${this.getLevelInfo(child.level).name})
                    </div>
                `;
            });
        } else {
            childHtml = '<h5>子级技能：无</h5>';
        }
        
        parentList.innerHTML = parentHtml;
        childList.innerHTML = childHtml;
        
        tooltip.style.display = 'block';
    }

    /**
     * 隐藏关联技能提示框
     */
    hideHighlightTooltip() {
        const tooltip = document.getElementById('highlightTooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    }

    /**
     * 更新关联技能数量统计
     */
    updateRelatedSkillsCount() {
        const countElement = document.getElementById('relatedSkillsCount');
        if (countElement) {
            countElement.textContent = this.highlightedSkills.size;
        }
    }

    // ==================== 自定义图标选择框 ====================
    /**
     * 初始化4个父级选择框（严格限制最多4个）
     */
    initParentSelectors() {
        const parentContainer = document.getElementById('parentSkillsContainer');
        if (!parentContainer) {
            console.error('未找到父级技能容器：parentSkillsContainer');
            return;
        }
        
        // 清空容器，确保只创建4个选择框
        parentContainer.innerHTML = '';
        
        // 循环创建4个父级选择框
        for (let i = 0; i < this.maxParentCount; i++) {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';
            formGroup.innerHTML = `
                <label for="parentSkill${i+1}">父级技能 ${i+1}（可选）：</label>
                <select id="parentSkill${i+1}" class="form-control parent-skill">
                    <option value="">无</option>
                </select>
            `;
            parentContainer.appendChild(formGroup);
            
            // 为每个选择框绑定去重事件
            const selector = formGroup.querySelector('.parent-skill');
            selector.addEventListener('change', () => {
                this.preventDuplicateParentSelection();
            });
        }
    }

    /**
     * 初始化自定义图标选择框（替代原生select）
     */
    initIconSelect() {
        const optionsContainer = document.getElementById('skillIconOptions');
        const trigger = document.getElementById('skillIconTrigger');
        const selectedIcon = document.getElementById('selectedIcon');
        const iconValue = document.getElementById('skillIconValue');
        
        if (!optionsContainer || !trigger || !selectedIcon || !iconValue) return;

        // 清空现有选项
        optionsContainer.innerHTML = '';

        // 生成图标选项
        this.skillIcons.forEach(icon => {
            const iconName = this.getIconName(icon);
            const option = document.createElement('div');
            option.className = 'custom-select-option';
            option.dataset.icon = icon;
            option.dataset.name = iconName;
            option.textContent = `${icon} ${iconName}`;

            // 默认选中第一个图标
            if (icon === '🎯') {
                option.classList.add('selected');
                selectedIcon.textContent = `${icon} ${iconName}`;
                iconValue.value = icon;
            }

            // 选项点击事件
            option.addEventListener('click', () => {
                // 移除其他选项的选中状态
                optionsContainer.querySelectorAll('.custom-select-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // 设置当前选项为选中
                option.classList.add('selected');
                selectedIcon.textContent = `${icon} ${iconName}`;
                iconValue.value = icon;
                // 隐藏下拉列表
                optionsContainer.classList.remove('show');
                trigger.querySelector('.dropdown-arrow').style.transform = '';
            });

            optionsContainer.appendChild(option);
        });

        // 下拉框触发事件
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            optionsContainer.classList.toggle('show');
            // 箭头旋转动画
            const arrow = trigger.querySelector('.dropdown-arrow');
            arrow.style.transform = optionsContainer.classList.contains('show') ? 'rotate(180deg)' : '';
        });

        // 点击页面其他区域关闭下拉框
        document.addEventListener('click', () => {
            optionsContainer.classList.remove('show');
            const arrow = trigger.querySelector('.dropdown-arrow');
            arrow.style.transform = '';
        });

        // 阻止下拉框内部点击事件冒泡
        optionsContainer.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    /**
     * 获取图标对应的中文名称
     */
    getIconName(icon) {
        const iconNames = {
            '🎯': '目标', '🌟': '天赋', '🔥': '热情', '⚡': '敏捷', '💡': '创意',
            '❤️': '爱心', '💪': '力量', '🎨': '艺术', '🎵': '音乐', '🎮': '游戏',
            '📝': '写作', '📚': '阅读', '🧮': '数学', '🧪': '实验', '🧑‍💻': '编程',
            '🧑‍🏫': '教学', '🧑‍🍳': '烹饪', '🧑‍🔧': '维修', '🧑‍🚒': '救援', '🧑‍⚕️': '医疗',
            '🧑‍✈️': '飞行', '🧑‍🚀': '航天', '🧑‍🌾': '农耕', '🧑‍🎨': '设计', '🧑‍🎤': '演唱',
            '🧑‍🎓': '学习', '🧑‍🏭': '制造', '🧑‍💼': '管理', '🧑‍🔬': '研究', '🧑‍🩹': '护理',
            '🧑‍🍼': '育儿', '🧹': '清洁', '🧺': '收纳', '🧻': '整理', '🛠️': '工具',
            '🛡️': '防护', '📸': '摄影', '📹': '摄像', '🎙️': '主持', '📊': '分析',
            '📈': '增长', '📉': '风控', '🔍': '洞察', '🔧': '调试', '🔨': '工匠',
            '⚙️': '机械', '🪛': '精细', '🧰': '工具箱', '🗺️': '导航'
        };
        return iconNames[icon] || '自定义';
    }

    // ==================== 事件监听初始化 ====================
    /**
     * 初始化事件监听
     */
    initializeEventListeners() {
        // ========== 画布管理事件 ==========
        const bindCanvasBtnEvent = (id, callback) => {
            const btn = document.getElementById(id);
            if (btn) btn.addEventListener('click', callback);
        };

        // 画布管理按钮
        bindCanvasBtnEvent('createCanvasBtn', () => this.createNewCanvas());
        bindCanvasBtnEvent('renameCanvasBtn', () => this.showRenameCanvasModal());
        bindCanvasBtnEvent('deleteCanvasBtn', () => this.deleteCurrentCanvas());
        bindCanvasBtnEvent('closeRenameModal', () => this.hideRenameCanvasModal());
        bindCanvasBtnEvent('cancelRenameBtn', () => this.hideRenameCanvasModal());

        // 画布选择下拉框切换
        const canvasSelector = document.getElementById('canvasSelector');
        if (canvasSelector) {
            canvasSelector.addEventListener('change', (e) => {
                this.switchCanvas(e.target.value);
            });
        }

        // 画布重命名表单提交
        const renameForm = document.getElementById('renameCanvasForm');
        if (renameForm) {
            renameForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newName = document.getElementById('canvasNewName').value;
                this.renameCanvas(newName);
                this.hideRenameCanvasModal();
            });
        }

        // ========== 核心功能事件 ==========
        // 控制面板按钮事件
        const bindBtnEvent = (id, callback) => {
            const btn = document.getElementById(id);
            if (btn) btn.addEventListener('click', callback);
        };

        bindBtnEvent('addSkillBtn', () => {
            this.resetSkillForm();
            this.showSkillModal();
        });
        bindBtnEvent('exportBtn', () => this.exportCurrentCanvasData());
        bindBtnEvent('importBtn', () => document.getElementById('importFile').click());
        bindBtnEvent('resetViewBtn', () => this.resetView());
        bindBtnEvent('autoAlignBtn', () => this.autoAlignSkills());
        bindBtnEvent('clearAllBtn', () => this.clearCurrentCanvas());
        bindBtnEvent('closeModal', () => this.hideSkillModal());
        bindBtnEvent('cancelBtn', () => this.hideSkillModal());
        bindBtnEvent('closeWelcomeModal', () => this.hideWelcomeModal());
        bindBtnEvent('startBtn', () => this.hideWelcomeModal());
        // 无限画布新增功能
        bindBtnEvent('showAllNodesBtn', () => this.showAllNodes());
        bindBtnEvent('centerSelectedNodeBtn', () => this.centerSelectedNode());

        // 表单提交事件
        const form = document.getElementById('addSkillForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveSkill();
            });
        }

        // 文件导入事件
        const importFile = document.getElementById('importFile');
        if (importFile) {
            importFile.addEventListener('change', (e) => this.importDataToCurrentCanvas(e));
        }

        // 画布事件 - 技能节点拖拽
        if (this.canvas) {
            this.canvas.addEventListener('mousedown', (e) => {
                const skillNode = e.target.closest('.skill-node');
                if (skillNode) {
                    this.startDraggingSkill(skillNode, e);
                }
            });
        }

        // 全局鼠标事件 - 技能节点拖拽逻辑
        document.addEventListener('mousemove', (e) => {
            if (this.isDraggingSkill) {
                this.dragSkill(e);
            }
        });

        document.addEventListener('mouseup', () => {
            if (this.isDraggingSkill) {
                this.stopDraggingSkill();
            }
        });

        // Ctrl键多选模式
        document.addEventListener('keydown', (e) => {
            this.isMultiSelectMode = e.ctrlKey || e.metaKey;
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === 'Control' || e.key === 'Meta') {
                this.isMultiSelectMode = false;
            }
        });

        // 模态框外部点击关闭
        const bindModalOutsideClose = (modalId) => {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this[`hide${modalId.charAt(0).toUpperCase() + modalId.slice(1)}Modal`]();
                    }
                });
            }
        };
        bindModalOutsideClose('skillModal');
        bindModalOutsideClose('welcomeModal');
        bindModalOutsideClose('renameCanvasModal');

        // ========== 移动端适配 ==========
        this.initMobileUI();
    }

    /**
     * 【新增】移动端 UI 初始化
     */
    initMobileUI() {
        // 检测是否为移动设备
        const isMobileDevice = () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   window.innerWidth <= 768;
        };

        // 获取必要的 DOM 元素
        const mobileHeader = document.getElementById('mobileHeader');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const sidebar = document.getElementById('sidebar');

        if (!mobileHeader || !sidebar) return;

        // 显示/隐藏移动端操作界面
        const checkAndToggleMobileUI = () => {
            if (isMobileDevice()) {
                mobileHeader.style.display = 'flex';
                sidebar.classList.remove('active');
            } else {
                mobileHeader.style.display = 'none';
            }
        };

        // 初始化检查
        checkAndToggleMobileUI();

        // 监听窗口大小变化
        window.addEventListener('resize', checkAndToggleMobileUI);

        // 菜单按钮点击事件 - 打开/关闭侧滑菜单
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                sidebarOverlay.classList.toggle('show');
            });
        }

        // 遮挡层点击关闭菜单
        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', () => {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('show');
            });
        }

        // 点击 sidebar 中的按钮后自动关闭菜单
        const sidebarButtons = sidebar.querySelectorAll('button');
        sidebarButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('show');
            });
        });

        // 点击 select 下拉框后关闭菜单
        const selectors = sidebar.querySelectorAll('select');
        selectors.forEach(sel => {
            sel.addEventListener('change', () => {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('show');
            });
        });

        // 模态框打开时关闭菜单和遮挡层
        const skillModal = document.getElementById('skillModal');
        const renameCanvasModal = document.getElementById('renameCanvasModal');
        
        const hideMenuOnModalOpen = (modal) => {
            if (modal) {
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (modal.style.display === 'flex') {
                            sidebar.classList.remove('active');
                            sidebarOverlay.classList.remove('show');
                        }
                    });
                });
                observer.observe(modal, { attributes: true, attributeFilter: ['style'] });
            }
        };

        hideMenuOnModalOpen(skillModal);
        hideMenuOnModalOpen(renameCanvasModal);

        // 技能信息面板在移动端的显示/隐藏
        const skillInfoPanel = document.getElementById('skillInfo');
        const toggleInfoPanel = document.getElementById('toggleInfoPanel');
        
        if (toggleInfoPanel && skillInfoPanel) {
            toggleInfoPanel.addEventListener('click', () => {
                skillInfoPanel.classList.toggle('collapsed');
                toggleInfoPanel.textContent = skillInfoPanel.classList.contains('collapsed') ? '▶' : '◀';
                
                // 移动端：隐藏时从底部滑走
                if (isMobileDevice()) {
                    skillInfoPanel.classList.toggle('show');
                }
            });
        }
    }

    // ==================== 无限画布核心功能 ====================
    /**
     * 重置画布视图（修复：滚动到左上角而非中心）
     */
    /**
     * 【新增】自动对齐技能树 - 改进的树形布局算法
     */
    autoAlignSkills() {
        const skills = this.getCurrentSkills();
        if (skills.length === 0) return;

        // 步骤1：为每个技能计算层级（depth）
        const skillDepth = {};
        const calculateDepth = (skillId) => {
            if (skillDepth[skillId] !== undefined) {
                return skillDepth[skillId];
            }

            const skill = skills.find(s => s.id === skillId);
            if (!skill || !skill.parentIds || skill.parentIds.length === 0) {
                skillDepth[skillId] = 0; // 根技能
                return 0;
            }

            const parentDepths = skill.parentIds.filter(id => id).map(calculateDepth);
            const depth = Math.max(...parentDepths) + 1;
            skillDepth[skillId] = depth;
            return depth;
        };

        skills.forEach(skill => calculateDepth(skill.id));

        // 步骤2：按层级分组技能
        const skillsByLayer = {};
        skills.forEach(skill => {
            const depth = skillDepth[skill.id];
            if (!skillsByLayer[depth]) {
                skillsByLayer[depth] = [];
            }
            skillsByLayer[depth].push(skill);
        });

        // 步骤3：计算每个技能有多少个子技能（用于决定分散程度）
        const childCount = {};
        skills.forEach(skill => {
            childCount[skill.id] = skills.filter(s => 
                s.parentIds && s.parentIds.includes(skill.id)
            ).length;
        });

        // 步骤4：计算最优位置
        const LAYER_HEIGHT = 300; // 层之间的垂直距离
        const START_Y = 100; // 起始Y坐标
        const START_X = 200; // 起始X坐标
        const NODE_WIDTH = this.baseSizes.nodeWidth;
        const H_SPACING = 200; // 同层节点之间的水平距离
        const CHILD_SPREAD = 300; // 子技能左右分散距离

        // 计算每个技能的X坐标
        const positionMap = {};

        Object.keys(skillsByLayer).sort((a, b) => parseInt(a) - parseInt(b)).forEach(layerIndex => {
            const layer = skillsByLayer[layerIndex];
            const layerY = START_Y + parseInt(layerIndex) * LAYER_HEIGHT;
            const depth = parseInt(layerIndex);

            layer.forEach((skill, index) => {
                let x;

                if (depth === 0) {
                    // 【根技能】直线排列
                    x = START_X + index * (NODE_WIDTH + H_SPACING);
                } else {
                    // 【子技能】相对于父级的位置进行分散
                    const parentIds = skill.parentIds.filter(id => id);
                    
                    if (parentIds.length > 0) {
                        const parentId = parentIds[0]; // 取主父级
                        const parentSkill = skills.find(s => s.id === parentId);
                        
                        if (parentSkill && positionMap[parentId] !== undefined) {
                            const parentX = positionMap[parentId];
                            
                            // 获取该父级的所有子技能
                            const siblings = skills.filter(s => 
                                s.parentIds && s.parentIds.includes(parentId) && 
                                skillDepth[s.id] === depth
                            );
                            const siblingIndex = siblings.findIndex(s => s.id === skill.id);
                            
                            // 【优化逻辑】
                            if (siblings.length === 1) {
                                // 只有一个子技能：正下方排列（直线）
                                x = parentX;
                            } else {
                                // 多个子技能：分散在父级的左下和右下
                                const totalSiblings = siblings.length;
                                const spread = CHILD_SPREAD * (totalSiblings - 1) / 2;
                                const offset = (siblingIndex - (totalSiblings - 1) / 2) * CHILD_SPREAD;
                                x = parentX + offset;
                            }
                        } else {
                            // 备选方案：线性排列
                            x = START_X + index * (NODE_WIDTH + H_SPACING);
                        }
                    } else {
                        // 无父级的技能：线性排列
                        x = START_X + index * (NODE_WIDTH + H_SPACING);
                    }
                }

                skill.x = Math.max(50, x); // 保证最小边距
                skill.y = layerY;
                positionMap[skill.id] = x; // 记录用于子技能参考
            });
        });

        // 步骤5：保存并重新渲染
        this.setCurrentSkills(skills);
        this.renderSkillTree();
        
        // 显示提示信息
        this.showUnlockNotification(
            { name: '自动对齐', level: 0 },
            `✅ 已按树形结构自动对齐 ${skills.length} 个技能！`
        );

        // 平滑滚动到左上角
        const container = document.getElementById('canvasContainer');
        if (container) {
            container.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    resetView() {
        this.scaleFactor = 1;
        
        // 更新缩放控件
        const zoomSlider = document.getElementById('zoomSlider');
        const zoomValue = document.getElementById('zoomValue');
        if (zoomSlider && zoomValue) {
            zoomSlider.value = 1;
            zoomValue.textContent = `${Math.round(this.scaleFactor * 100)}%`;
        }

        // 修复：重置画布滚动到左上角（确保能看到默认节点）
        const container = document.getElementById('canvasContainer');
        if (container) {
            // 平滑滚动到左上角
            container.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'
            });
        }

        // 重新渲染
        this.renderSkillTree();
    }

    /**
     * 显示所有节点（自动滚动画布，让所有节点都在可视区域）
     */
    showAllNodes() {
        const container = document.getElementById('canvasContainer');
        const skills = this.getCurrentSkills();
        if (!container || skills.length === 0) return;

        // 计算所有节点的边界范围
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;
        const nodeWidth = this.baseSizes.nodeWidth * this.scaleFactor;
        const nodeHeight = this.baseSizes.nodeHeight * this.scaleFactor;

        skills.forEach(skill => {
            minX = Math.min(minX, skill.x);
            maxX = Math.max(maxX, skill.x + nodeWidth);
            minY = Math.min(minY, skill.y);
            maxY = Math.max(maxY, skill.y + nodeHeight);
        });

        // 计算画布需要滚动到的位置（让所有节点居中显示）
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const centerX = (minX + maxX) / 2 - containerWidth / 2;
        const centerY = (minY + maxY) / 2 - containerHeight / 2;

        // 平滑滚动到目标位置
        container.scrollTo({
            left: centerX,
            top: centerY,
            behavior: 'smooth'
        });
    }

    /**
     * 居中显示选中的节点
     */
    centerSelectedNode() {
        if (!this.selectedSkill && this.selectedSkills.size === 0) {
            alert('请先选中一个技能节点！');
            return;
        }

        const container = document.getElementById('canvasContainer');
        const skills = this.getCurrentSkills();
        const skillId = this.selectedSkill || Array.from(this.selectedSkills)[0];
        const skill = skills.find(s => s.id === skillId);
        if (!container || !skill) return;

        // 计算节点中心位置
        const nodeWidth = this.baseSizes.nodeWidth * this.scaleFactor;
        const nodeHeight = this.baseSizes.nodeHeight * this.scaleFactor;
        const nodeCenterX = skill.x + nodeWidth / 2;
        const nodeCenterY = skill.y + nodeHeight / 2;

        // 计算容器滚动位置（让节点居中）
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const scrollX = nodeCenterX - containerWidth / 2;
        const scrollY = nodeCenterY - containerHeight / 2;

        // 平滑滚动
        container.scrollTo({
            left: scrollX,
            top: scrollY,
            behavior: 'smooth'
        });
    }

    /**
     * 自动滚动画布（拖拽节点到边缘时触发）
     */
    autoScrollCanvas(e) {
        const container = document.getElementById('canvasContainer');
        if (!container) return;

        // 滚动触发区域（距离容器边缘30px时开始滚动）
        const scrollTrigger = 30;
        // 滚动速度
        const scrollSpeed = 8;

        const containerRect = container.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;

        // 横向滚动
        if (clientX < containerRect.left + scrollTrigger) {
            container.scrollLeft -= scrollSpeed;
        } else if (clientX > containerRect.right - scrollTrigger) {
            container.scrollLeft += scrollSpeed;
        }

        // 纵向滚动
        if (clientY < containerRect.top + scrollTrigger) {
            container.scrollTop -= scrollSpeed;
        } else if (clientY > containerRect.bottom - scrollTrigger) {
            container.scrollTop += scrollSpeed;
        }
    }

    /**
     * 滚动到指定技能节点位置（新增：修复节点不可见）
     */
    scrollToSkill(skillId) {
        const skills = this.getCurrentSkills();
        const skill = skills.find(s => s.id === skillId);
        if (!skill) return;

        const container = document.getElementById('canvasContainer');
        if (!container) return;

        // 滚动到技能节点位置（偏移 50px 避免贴边）
        container.scrollTo({
            left: skill.x - 50,
            top: skill.y - 50,
            behavior: 'smooth'
        });
    }

    // ==================== 技能节点拖拽 ====================
    /**
     * 开始拖动技能节点
     */
    startDraggingSkill(skillNode, e) {
        e.stopPropagation();
        this.isDraggingSkill = true;
        this.draggedSkillId = skillNode.getAttribute('data-skill-id');
        
        // 记录拖拽偏移量
        const rect = skillNode.getBoundingClientRect();
        this.dragOffset = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };

        skillNode.style.zIndex = 100;
        document.body.style.cursor = 'grabbing';
    }

    /**
     * 拖动技能节点 - 无限画布：移除边界限制
     */
    dragSkill(e) {
        if (!this.isDraggingSkill || !this.draggedSkillId) return;

        let skills = this.getCurrentSkills();
        const skill = skills.find(s => s.id === this.draggedSkillId);
        const skillNode = document.querySelector(`[data-skill-id="${this.draggedSkillId}"]`);
        if (!skill || !skillNode || !this.canvas) return;

        const canvasRect = this.canvas.getBoundingClientRect();
        // 无限画布：无边界限制，自由计算坐标
        const x = e.clientX - canvasRect.left - this.dragOffset.x;
        const y = e.clientY - canvasRect.top - this.dragOffset.y;

        // 更新技能坐标
        skill.x = x;
        skill.y = y;

        // 更新节点位置
        skillNode.style.left = `${x}px`;
        skillNode.style.top = `${y}px`;

        // 实时更新连接线
        this.drawConnections();

        // 自动滚动画布
        this.autoScrollCanvas(e);
    }

    /**
     * 停止拖动技能节点
     */
    stopDraggingSkill() {
        if (this.draggedSkillId) {
            const skillNode = document.querySelector(`[data-skill-id="${this.draggedSkillId}"]`);
            if (skillNode) skillNode.style.zIndex = '';
            
            // 保存位置
            let skills = this.getCurrentSkills();
            const skill = skills.find(s => s.id === this.draggedSkillId);
            if (skill) {
                this.setCurrentSkills(skills);
            }
        }

        this.isDraggingSkill = false;
        this.draggedSkillId = null;
        document.body.style.cursor = '';
    }

    // ==================== 技能数据管理 ====================
    /**
     * 清空当前画布的所有技能
     */
    clearCurrentCanvas() {
        const canvasName = this.canvasData[this.currentCanvasId].name;
        if (!confirm(`⚠️ 确定要清空画布「${canvasName}」的所有技能吗？`)) return;
        
        this.setCurrentSkills([]);
        this.selectedSkill = null;
        this.selectedSkills.clear();
        this.clearSkillInfo();
        this.renderSkillTree();
        this.updateStatistics();
        
        this.showUnlockNotification({ name: canvasName, level: 0 }, `画布「${canvasName}」已清空`);
    }

    /**
     * 导出当前画布数据
     */
    exportCurrentCanvasData() {
        if (!this.canvasData[this.currentCanvasId]) return;
        
        const canvas = this.canvasData[this.currentCanvasId];
        const dataStr = JSON.stringify(canvas, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileName = `${canvas.name}_${new Date().toISOString().slice(0,10)}.json`;

        const link = document.createElement('a');
        link.href = dataUri;
        link.download = exportFileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    /**
     * 导入数据到当前画布
     */
    importDataToCurrentCanvas(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                // 兼容两种格式：完整画布数据 或 仅技能数组
                let importedSkills = [];
                
                if (Array.isArray(importedData)) {
                    importedSkills = importedData;
                } else if (importedData.skills && Array.isArray(importedData.skills)) {
                    importedSkills = importedData.skills;
                } else {
                    alert('❌ 导入的数据格式不正确！');
                    return;
                }

                // 处理导入数据，确保父级最多4个
                const processedSkills = importedSkills.map(skill => {
                    let parentIds = [];
                    if (skill.parentId && !skill.parentIds) {
                        parentIds = [skill.parentId];
                    } else if (skill.parentIds) {
                        parentIds = Array.isArray(skill.parentIds) ? skill.parentIds : [skill.parentIds];
                    }

                    return {
                        ...skill,
                        parentIds: parentIds.slice(0, this.maxParentCount), // 最多4个父级
                        level: skill.level || 0,
                        icon: skill.icon || '🎯',
                        x: skill.x || 200, // 修复：导入技能默认x坐标200
                        y: skill.y || 200, // 修复：导入技能默认y坐标200
                        completed: skill.completed || (skill.level >= 5),
                        cost: skill.cost || 0,  // 【新增】为导入的旧数据提供默认金钱值
                        levelCost: skill.levelCost || 0  // 【新增】为导入的旧数据提供默认升级花费
                    };
                });

                // 合并或替换（这里选择替换）
                if (confirm(`✅ 成功解析${processedSkills.length}个技能，是否替换当前画布的所有技能？`)) {
                    this.setCurrentSkills(processedSkills);
                    this.selectedSkill = null;
                    this.selectedSkills.clear();
                    this.clearSkillInfo();
                    this.renderSkillTree();
                    this.updateStatistics();
                    
                    // 修复：导入后滚动到左上角
                    const canvasContainer = document.getElementById('canvasContainer');
                    if (canvasContainer) {
                        canvasContainer.scrollLeft = 0;
                        canvasContainer.scrollTop = 0;
                    }
                    
                    this.showUnlockNotification(
                        { name: this.canvasData[this.currentCanvasId].name, level: 0 }, 
                        `成功导入${processedSkills.length}个技能到当前画布`
                    );
                }
            } catch (e) {
                console.error('导入数据失败：', e);
                alert('❌ 导入数据失败，请检查文件格式！');
            } finally {
                // 清空文件输入
                document.getElementById('importFile').value = '';
            }
        };
        reader.readAsText(file);
    }

    /**
     * 防止父级技能重复选择（适配最多4个）
     */
    preventDuplicateParentSelection() {
        const selectors = document.querySelectorAll('.parent-skill');
        if (!selectors.length) return;

        // 收集已选值（去重）
        const selectedValues = [];
        Array.from(selectors).forEach(selector => {
            const value = selector.value;
            if (value && !selectedValues.includes(value)) {
                selectedValues.push(value);
            }
        });

        // 检查重复并提示
        const allValues = Array.from(selectors).map(s => s.value).filter(v => v);
        if (allValues.length !== selectedValues.length) {
            alert('⚠️ 不能选择重复的父级技能！');
            
            // 重置重复项（保留第一个，清空后续）
            const valueMap = {};
            Array.from(selectors).forEach(selector => {
                const value = selector.value;
                if (value) {
                    if (valueMap[value]) {
                        selector.value = ''; // 清空重复选择
                    } else {
                        valueMap[value] = true;
                    }
                }
            });
        }
    }

    // ==================== 技能表单处理 ====================
    /**
     * 绑定等级滑块事件
     */
    bindLevelSliderEvent() {
        const slider = document.getElementById('completionRateInput');
        const levelText = document.getElementById('levelText');
        if (!slider || !levelText) return;

        slider.addEventListener('input', () => {
            const level = parseInt(slider.value);
            const levelInfo = this.getLevelInfo(level);
            levelText.textContent = `${level}星 (${levelInfo.name})`;
        });
    }

    /**
     * 绑定缩放控制事件
     */
    bindCanvasZoomEvents() {
        const zoomSlider = document.getElementById('zoomSlider');
        const zoomInBtn = document.getElementById('zoomInBtn');
        const zoomOutBtn = document.getElementById('zoomOutBtn');
        const zoomValue = document.getElementById('zoomValue');
        if (!zoomSlider || !zoomValue) return;

        // 初始化显示
        zoomSlider.value = this.scaleFactor;
        zoomValue.textContent = `${Math.round(this.scaleFactor * 100)}%`;

        // 滑块缩放
        zoomSlider.addEventListener('input', () => {
            this.scaleFactor = parseFloat(zoomSlider.value);
            zoomValue.textContent = `${Math.round(this.scaleFactor * 100)}%`;
            this.renderSkillTree();
        });

        // 按钮缩放
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                this.scaleFactor = Math.min(2, parseFloat((this.scaleFactor + 0.1).toFixed(1)));
                zoomSlider.value = this.scaleFactor;
                zoomValue.textContent = `${Math.round(this.scaleFactor * 100)}%`;
                this.renderSkillTree();
            });
        }

        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                this.scaleFactor = Math.max(0.5, parseFloat((this.scaleFactor - 0.1).toFixed(1)));
                zoomSlider.value = this.scaleFactor;
                zoomValue.textContent = `${Math.round(this.scaleFactor * 100)}%`;
                this.renderSkillTree();
            });
        }
    }

    /**
     * 获取等级信息
     */
    getLevelInfo(stars) {
        stars = Math.max(0, Math.min(5, parseInt(stars) || 0));
        return this.levelConfig.find(level => level.stars === stars) || this.levelConfig[0];
    }

    /**
     * 重置技能表单（清空4个父级选择框）
     */
    resetSkillForm() {
        // 清空基础字段
        const clearField = (id) => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        };
        clearField('skillId');
        clearField('skillName');
        clearField('skillDescription');

        // 清空4个父级选择框
        document.querySelectorAll('.parent-skill').forEach(selector => {
            selector.value = '';
        });

        // 重置图标选择框
        const selectedIcon = document.getElementById('selectedIcon');
        const iconValue = document.getElementById('skillIconValue');
        const optionsContainer = document.getElementById('skillIconOptions');
        if (selectedIcon && iconValue && optionsContainer) {
            selectedIcon.textContent = '🎯 目标';
            iconValue.value = '🎯';
            optionsContainer.querySelectorAll('.custom-select-option').forEach(opt => {
                opt.classList.remove('selected');
                if (opt.dataset.icon === '🎯') {
                    opt.classList.add('selected');
                }
            });
        }
        
        // 重置等级滑块
        const slider = document.getElementById('completionRateInput');
        const levelText = document.getElementById('levelText');
        if (slider && levelText) {
            slider.value = 0;
            levelText.textContent = '0星 (未入门)';
        }

        // 更新模态框标题
        const modalTitle = document.getElementById('modalTitle');
        if (modalTitle) modalTitle.textContent = '添加新技能';

        // 更新父级选项
        this.updateParentSelect();
    }

    /**
     * 显示技能模态框
     */
    showSkillModal() {
        const modal = document.getElementById('skillModal');
        if (modal) {
            modal.style.display = 'block';
            this.updateParentSelect();
        }
    }

    /**
     * 隐藏技能模态框
     */
    hideSkillModal() {
        const modal = document.getElementById('skillModal');
        if (modal) modal.style.display = 'none';
        this.resetSkillForm();
    }

    /**
     * 检查首次访问并显示欢迎模态框
     */
    checkFirstVisit() {
        const hasVisited = localStorage.getItem('multiCanvasSkillTreeVisited');
        if (!hasVisited) {
            localStorage.setItem('multiCanvasSkillTreeVisited', 'true');
            setTimeout(() => this.showWelcomeModal(), 500);
        }
    }

    /**
     * 显示欢迎模态框
     */
    showWelcomeModal() {
        const modal = document.getElementById('welcomeModal');
        if (modal) modal.style.display = 'block';
    }

    /**
     * 隐藏欢迎模态框
     */
    hideWelcomeModal() {
        const modal = document.getElementById('welcomeModal');
        if (modal) modal.style.display = 'none';
    }

    /**
     * 显示画布重命名模态框
     */
    showRenameCanvasModal() {
        const modal = document.getElementById('renameCanvasModal');
        const nameInput = document.getElementById('canvasNewName');
        
        if (modal && nameInput && this.canvasData[this.currentCanvasId]) {
            // 填充当前画布名称
            nameInput.value = this.canvasData[this.currentCanvasId].name;
            modal.style.display = 'block';
            // 聚焦输入框
            nameInput.focus();
            nameInput.select();
        }
    }

    /**
     * 隐藏画布重命名模态框
     */
    hideRenameCanvasModal() {
        const modal = document.getElementById('renameCanvasModal');
        if (modal) {
            modal.style.display = 'none';
            // 清空输入框
            const nameInput = document.getElementById('canvasNewName');
            if (nameInput) nameInput.value = '';
        }
    }

    /**
     * 更新父级技能选择框选项（最多4个）
     */
    updateParentSelect() {
        const selectors = document.querySelectorAll('.parent-skill');
        if (!selectors.length) return;

        // 获取当前编辑的技能ID（排除自身作为父级）
        const currentSkillId = document.getElementById('skillId')?.value || '';
        // 获取当前画布的技能
        const skills = this.getCurrentSkills();

        // 构建技能选项
        const rootSkills = skills.filter(skill => {
            const isRoot = !skill.parentIds || skill.parentIds.length === 0 || skill.parentIds.every(p => !p);
            return isRoot && skill.id !== currentSkillId;
        });

        const childSkills = skills.filter(skill => {
            const isChild = skill.parentIds && skill.parentIds.length > 0 && skill.parentIds.some(p => p);
            return isChild && skill.id !== currentSkillId;
        });

        // 生成选项HTML
        let optionsHtml = '';
        if (rootSkills.length > 0) {
            optionsHtml += '<optgroup label="根技能">';
            rootSkills.forEach(skill => {
                const levelInfo = this.getLevelInfo(skill.level);
                optionsHtml += `<option value="${skill.id}">${skill.name} (${levelInfo.name})</option>`;
            });
            optionsHtml += '</optgroup>';
        }

        if (childSkills.length > 0) {
            optionsHtml += '<optgroup label="子技能">';
            childSkills.forEach(skill => {
                const levelInfo = this.getLevelInfo(skill.level);
                optionsHtml += `<option value="${skill.id}">${skill.name} (${levelInfo.name})</option>`;
            });
            optionsHtml += '</optgroup>';
        }

        // 更新所有4个选择框
        selectors.forEach(selector => {
            selector.innerHTML = '<option value="">无</option>' + optionsHtml;
        });
    }

    // ==================== 技能核心操作 ====================
    /**
     * 保存技能（严格限制最多4个父级，修复节点默认坐标）
     */
    saveSkill() {
        // 获取当前画布的技能
        let skills = this.getCurrentSkills();
        
        // 获取表单数据
        const skillId = document.getElementById('skillId')?.value || '';
        const name = document.getElementById('skillName')?.value.trim() || '';
        const description = document.getElementById('skillDescription')?.value.trim() || '';
        // 从自定义图标选择框获取值
        const icon = document.getElementById('skillIconValue')?.value || '🎯';
        const level = parseInt(document.getElementById('completionRateInput')?.value || 0);
        
        // 【新增】获取金钱相关字段
        const cost = parseInt(document.getElementById('skillCost')?.value || 0);
        const levelCost = parseInt(document.getElementById('skillLevelCost')?.value || 0);

        // 验证技能名称
        if (!name) {
            alert('❌ 技能名称不能为空！');
            return;
        }

        // 获取最多4个父级ID（过滤空值）
        const parentIds = Array.from(document.querySelectorAll('.parent-skill'))
            .map(s => s.value)
            .filter(v => v)
            .slice(0, this.maxParentCount); // 强制最多4个

        // 编辑现有技能
        if (skillId) {
            const index = skills.findIndex(s => s.id === skillId);
            if (index !== -1) {
                skills[index] = {
                    ...skills[index],
                    name,
                    description,
                    parentIds, // 最多4个父级
                    icon,
                    level: Math.max(0, Math.min(5, level)),
                    completed: level >= 5,
                    cost: cost,  // 【新增】保存学习花费
                    levelCost: levelCost  // 【新增】保存升级花费
                };
            }
        } 
        // 添加新技能（修复：默认坐标改为左上角200px）
        else {
            // 修复：基于画布实际尺寸计算默认坐标，且让节点出现在可视区域
            const canvasContainer = document.getElementById('canvasContainer');
            // 画布实际尺寸（5000x5000）
            const canvasWidth = 5000;
            const canvasHeight = 5000;
            // 缩放后的节点尺寸
            const nodeWidth = this.baseSizes.nodeWidth * this.scaleFactor;
            const nodeHeight = this.baseSizes.nodeHeight * this.scaleFactor;

            // 默认位置：画布左上角偏移 200px（确保在可视区域）
            let x = 200;
            let y = 200;

            // 初始化画布容器滚动到左上角（确保能看到默认节点）
            if (canvasContainer) {
                canvasContainer.scrollLeft = 0;
                canvasContainer.scrollTop = 0;
            }

            const skill = {
                id: Date.now().toString(),
                name,
                description,
                parentIds, // 最多4个父级
                icon,
                level: 0,
                completed: false,
                x: x,
                y: y,
                cost: cost,  // 【新增】保存学习花费
                levelCost: levelCost  // 【新增】保存升级花费
            };
            skills.push(skill);
        }

        // 保存并刷新界面
        this.setCurrentSkills(skills);
        this.renderSkillTree();
        this.updateStatistics();
        this.resetView();
        this.hideSkillModal();

        // 修复：新增技能后自动滚动到该节点
        if (!skillId) {
            // 新增技能，滚动到该节点
            const newSkillId = skills[skills.length - 1].id;
            setTimeout(() => this.scrollToSkill(newSkillId), 100);
        }

        // 提示信息
        this.showUnlockNotification(
            { name, level }, 
            `${skillId ? '编辑' : '添加'}技能「${name}」成功！`
        );
    }

    /**
     * 编辑技能（精准回显最多4个父级）
     */
    editSkill(skillId) {
        const skills = this.getCurrentSkills();
        const skill = skills.find(s => s.id === skillId);
        if (!skill) return;

        // 填充基础信息
        const setFieldValue = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.value = value;
        };
        setFieldValue('skillId', skill.id);
        setFieldValue('skillName', skill.name);
        setFieldValue('skillDescription', skill.description);
        setFieldValue('completionRateInput', skill.level || 0);
        
        // 【新增】回显金钱相关字段
        setFieldValue('skillCost', skill.cost || 0);
        setFieldValue('skillLevelCost', skill.levelCost || 0);

        // 更新等级显示
        const levelText = document.getElementById('levelText');
        if (levelText) {
            const levelInfo = this.getLevelInfo(skill.level || 0);
            levelText.textContent = `${skill.level || 0}星 (${levelInfo.name})`;
        }

        // 更新模态框标题
        const modalTitle = document.getElementById('modalTitle');
        if (modalTitle) modalTitle.textContent = '编辑技能';

        // 回显自定义图标选择框的值
        const selectedIcon = document.getElementById('selectedIcon');
        const iconValue = document.getElementById('skillIconValue');
        const optionsContainer = document.getElementById('skillIconOptions');
        if (selectedIcon && iconValue && optionsContainer) {
            const icon = skill.icon || '🎯';
            const iconName = this.getIconName(icon);
            selectedIcon.textContent = `${icon} ${iconName}`;
            iconValue.value = icon;
            
            // 更新选项的选中状态
            optionsContainer.querySelectorAll('.custom-select-option').forEach(opt => {
                opt.classList.remove('selected');
                if (opt.dataset.icon === icon) {
                    opt.classList.add('selected');
                }
            });
        }

        // 先更新父级选项，再回显原有父级（最多4个）
        this.updateParentSelect();
        
        // 延迟回显确保选项加载完成
        setTimeout(() => {
            const parentIds = skill.parentIds || [];
            const selectors = document.querySelectorAll('.parent-skill');
            
            // 按顺序回显最多4个父级
            selectors.forEach((selector, index) => {
                const targetValue = parentIds[index] || '';
                // 检查选项是否存在
                const optionExists = Array.from(selector.options).some(opt => opt.value === targetValue);
                selector.value = optionExists ? targetValue : '';
            });
        }, 50);

        // 显示模态框
        this.showSkillModal();
    }

    /**
     * 删除技能（递归删除子技能）
     */
    deleteSkill(skillId) {
        if (!confirm('⚠️ 确定要删除这个技能吗？这将同时删除所有子技能！')) return;

        let skills = this.getCurrentSkills();
        skills = this.deleteSkillRecursiveHelper(skills, skillId);
        
        // 保存并刷新
        this.setCurrentSkills(skills);
        this.renderSkillTree();
        this.updateStatistics();
        this.clearSkillInfo();

        // 从选中集合中移除
        this.selectedSkills.delete(skillId);
        if (this.selectedSkill === skillId) {
            this.selectedSkill = null;
        }

        // 提示信息
        this.showUnlockNotification(
            { name: '删除技能', level: 0 }, 
            '技能及关联子技能已成功删除！'
        );
    }

    /**
     * 递归删除技能及子技能（辅助方法）
     */
    deleteSkillRecursiveHelper(skills, skillId) {
        // 查找并删除所有子技能
        const childSkills = skills.filter(skill => {
            return skill.parentIds && skill.parentIds.includes(skillId);
        });
        childSkills.forEach(child => {
            skills = this.deleteSkillRecursiveHelper(skills, child.id);
        });

        // 删除当前技能
        skills = skills.filter(skill => skill.id !== skillId);

        // 清除选中状态
        if (this.selectedSkill === skillId) {
            this.selectedSkill = null;
        }

        return skills;
    }

    /**
     * 升级技能等级
     */
    /**
     * 降级技能
     */
    downgradeSkill(skillId) {
        let skills = this.getCurrentSkills();
        const skill = skills.find(s => s.id === skillId);
        if (!skill) return;

        // 检查技能是否已是0级
        const currentLevel = skill.level || 0;
        if (currentLevel <= 0) {
            alert('❌ 该技能已是未入门状态，无法继续降级！');
            return;
        }

        // 降级等级
        skill.level = currentLevel - 1;
        skill.completed = skill.level >= 5;

        // 添加降级动画
        const nodeElement = document.querySelector(`[data-skill-id="${skillId}"]`);
        if (nodeElement) {
            nodeElement.classList.add('downgrading');
            setTimeout(() => nodeElement.classList.remove('downgrading'), 600);
        }

        // 显示降级通知
        const levelInfo = this.getLevelInfo(skill.level);
        this.showUnlockNotification(skill, `降级到${levelInfo.name}！`);

        // 保存并刷新
        this.setCurrentSkills(skills);
        this.renderSkillTree();
        this.updateStatistics();
        
        // 【修改】降级后更新被降级技能的详情和所有子技能的显示状态
        this.updateSkillInfo(skill);
        
        // 如果当前选中的技能是这个技能的子技能，也需要更新其显示
        if (this.selectedSkill) {
            const selectedSkill = skills.find(s => s.id === this.selectedSkill);
            if (selectedSkill && this.isSkillDependent(selectedSkill, skill)) {
                // 重新更新选中技能的信息（以显示正确的锁定状态）
                this.updateSkillInfo(selectedSkill);
            }
        }
    }

    /**
     * 【新增】检查一个技能是否直接或间接依赖于另一个技能
     */
    isSkillDependent(skill, potentialAncestor) {
        if (!skill.parentIds || skill.parentIds.length === 0) return false;
        
        const skills = this.getCurrentSkills();
        
        // 检查是否是直接子技能
        if (skill.parentIds.includes(potentialAncestor.id)) {
            return true;
        }
        
        // 递归检查间接依赖关系
        for (const parentId of skill.parentIds) {
            const parent = skills.find(s => s.id === parentId);
            if (parent && this.isSkillDependent(parent, potentialAncestor)) {
                return true;
            }
        }
        
        return false;
    }

    upgradeSkill(skillId) {
        let skills = this.getCurrentSkills();
        const skill = skills.find(s => s.id === skillId);
        if (!skill) return;

        // 检查父级是否全部满足条件
        if (this.isSkillLocked(skill)) {
            alert('❌ 该技能的父级未全部达到2星，无法点亮/升级！');
            return;
        }

        // 检查是否已达满级
        const currentLevel = skill.level || 0;
        if (currentLevel >= 5) {
            alert('✅ 该技能已达到最高等级（大师）！');
            return;
        }

        // 升级等级
        skill.level = currentLevel + 1;
        skill.completed = skill.level >= 5;

        // 添加升级动画
        const nodeElement = document.querySelector(`[data-skill-id="${skillId}"]`);
        if (nodeElement) {
            nodeElement.classList.add('unlocking');
            setTimeout(() => nodeElement.classList.remove('unlocking'), 600);
        }

        // 显示升级通知
        const levelInfo = this.getLevelInfo(skill.level);
        this.showUnlockNotification(skill, `升级到${levelInfo.name}！`);

        // 保存并刷新
        this.setCurrentSkills(skills);
        this.renderSkillTree();
        this.updateStatistics();
        this.updateSkillInfo(skill);
    }

    /**
     * 检查技能是否被锁定（父级未全部达标）
     */
    isSkillLocked(skill) {
        // 根技能不锁定
        if (!skill.parentIds || skill.parentIds.length === 0) return false;

        const validParentIds = skill.parentIds.filter(id => id);
        if (validParentIds.length === 0) return false;

        const skills = this.getCurrentSkills();
        // 【修改】级联锁定：任意父级未达到2星，或任意父级本身被锁定，则此技能被锁定
        return validParentIds.some(parentId => {
            const parentSkill = skills.find(s => s.id === parentId);
            // 父级不存在、等级不足、或父级本身被锁定
            return !parentSkill || parentSkill.level < 2 || this.isSkillLocked(parentSkill);
        });
    }

    /**
     * 显示解锁/升级通知
     */
    showUnlockNotification(skill, message = '') {
        const levelInfo = this.getLevelInfo(skill.level || 0);
        const notification = document.createElement('div');
        notification.className = 'unlock-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h4>🎉 ${message || `技能${levelInfo.name}解锁！`}</h4>
                <p>${skill.name} (${skill.level || 0}星)</p>
            </div>
        `;

        document.body.appendChild(notification);

        // 显示通知
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // 3秒后隐藏并移除
        setTimeout(() => {
            notification.style.transform = 'translateX(120%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // ==================== 渲染与统计 ====================
    /**
     * 渲染技能树（核心方法）
     */
    renderSkillTree() {
        if (!this.canvas) return;

        // 清空画布
        this.canvas.innerHTML = '';

        // 获取当前画布的技能
        const skills = this.getCurrentSkills();

        // 先绘制连接线
        this.drawConnections();

        // 绘制所有技能节点
        skills.forEach(skill => {
            this.createSkillElement(skill);
        });

        // 更新关联技能高亮
        if (this.highlightMode && this.highlightedSkills.size > 0) {
            this.updateHighlight();
        }
    }

    /**
     * 创建单个技能节点元素
     */
    createSkillElement(skill) {
        if (!this.canvas) return;

        const isLocked = this.isSkillLocked(skill);
        const isSelected = this.selectedSkill === skill.id || this.selectedSkills.has(skill.id);
        const isHighlighted = this.highlightedSkills.has(skill.id);
        
        // 计算缩放后的尺寸
        const nodeWidth = this.baseSizes.nodeWidth * this.scaleFactor;
        const nodeHeight = this.baseSizes.nodeHeight * this.scaleFactor;
        const iconSize = this.baseSizes.iconSize * this.scaleFactor;
        const fontSize = this.baseSizes.fontSize * this.scaleFactor;
        const starSize = this.baseSizes.starSize * this.scaleFactor;

        // 创建节点元素
        const node = document.createElement('div');
        node.className = `skill-node ${skill.completed ? 'completed' : ''} ${isLocked ? 'locked' : ''} ${isSelected ? 'selected' : ''} ${isHighlighted ? 'related-highlight' : ''}`;
        node.dataset.skillId = skill.id;

        // 设置节点位置和尺寸
        node.style.left = `${skill.x}px`;
        node.style.top = `${skill.y}px`;
        node.style.width = `${nodeWidth}px`;
        node.style.height = `${nodeHeight}px`;
        node.style.borderRadius = `${16 * this.scaleFactor}px`;
        node.style.padding = `${12 * this.scaleFactor}px`;
        node.style.display = 'flex';
        node.style.flexDirection = 'column';
        node.style.alignItems = 'center';
        node.style.justifyContent = 'center';
        node.style.textAlign = 'center';
        node.style.cursor = isLocked ? 'not-allowed' : 'pointer';

        // 设置背景样式
        if (isLocked) {
            node.style.background = 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)';
            node.style.border = `${2 * this.scaleFactor}px solid #E0E0E0`;
        } else if (skill.completed) {
            node.style.background = 'linear-gradient(135deg, #4A90E2 0%, #5C6BC0 100%)';
            node.style.border = `${2 * this.scaleFactor}px solid #357ABD`;
            node.style.color = '#FFFFFF';
        } else {
            node.style.background = 'linear-gradient(135deg, #D9E8FF 0%, #E8F0FF 100%)';
            node.style.border = `${2 * this.scaleFactor}px solid #4A90E2`;
        }

        // 生成星级HTML（极致紧凑）
        const starGap = 1 * this.scaleFactor;
        const level = skill.level || 0;
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<span class="star ${i <= level ? 'filled' : ''}" style="font-size: ${starSize}px; margin: 0 ${starGap/2}px;">★</span>`;
        }

        // 锁定提示
        const lockTip = isLocked ? `<small style="font-size: ${fontSize * 0.7}px; color: #FF6B6B; margin-top: 4px; display: block;">（无法点亮）</small>` : '';

        // 节点内容
        node.innerHTML = `
            <div class="skill-icon-wrapper" style="font-size: ${iconSize}px; width: ${iconSize}px; height: ${iconSize}px;">
                <span class="skill-icon">${skill.icon || '🎯'}</span>
            </div>
            <div class="skill-name" style="font-size: ${fontSize}px; margin-bottom: ${6 * this.scaleFactor}px; font-weight: 500; line-height: 1.2;">${skill.name}</div>
            <div class="skill-stars" style="margin: ${8 * this.scaleFactor}px 0; display: flex; justify-content: center; align-items: center; padding: 0 ${4 * this.scaleFactor}px;">${starsHtml}</div>
            <div class="skill-level" style="font-size: ${fontSize * 0.85}px; margin-top: ${2 * this.scaleFactor}px; opacity: 0.9;">${this.getLevelInfo(level).name}</div>
            ${lockTip}
        `;

        // 设置图标容器样式
        const iconWrapper = node.querySelector('.skill-icon-wrapper');
        if (iconWrapper) {
            iconWrapper.style.borderRadius = '50%';
            iconWrapper.style.display = 'flex';
            iconWrapper.style.alignItems = 'center';
            iconWrapper.style.justifyContent = 'center';
            iconWrapper.style.marginBottom = `${8 * this.scaleFactor}px`;
            
            if (isLocked) {
                iconWrapper.style.background = '#EEEEEE';
                node.querySelector('.skill-icon').style.color = '#BDBDBD';
            } else if (skill.completed) {
                iconWrapper.style.background = 'rgba(255,255,255,0.2)';
                node.querySelector('.skill-icon').style.color = '#FFFFFF';
            } else {
                iconWrapper.style.background = 'rgba(74, 144, 226, 0.1)';
                node.querySelector('.skill-icon').style.color = '#4A90E2';
            }
        }

        // 绑定事件
        node.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.isMultiSelectMode) {
                this.toggleSkillSelection(skill.id, true);
            } else {
                this.selectSkill(skill.id);
            }
        });

        node.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            if (!isLocked) {
                this.upgradeSkill(skill.id);
            } else {
                alert('❌ 该技能的父级未全部达到2星，无法点亮/升级！');
            }
        });

        // 鼠标悬停事件 - 关联高亮
        node.addEventListener('mouseenter', (e) => {
            e.stopPropagation();
            this.hoveredSkill = skill.id;
            if (this.highlightMode && !this.isSelecting) {
                this.highlightRelatedSkills(skill.id);
            }
        });

        node.addEventListener('mouseleave', (e) => {
            e.stopPropagation();
            this.hoveredSkill = null;
            if (this.highlightMode && !this.selectedSkill) {
                this.clearHighlight();
            }
        });

        // 添加到画布
        this.canvas.appendChild(node);
        return node;
    }

    /**
     * 绘制技能连接线（适配最多4个父级）
     */
    drawConnections() {
        if (!this.canvas) return;

        // 清除现有连接线
        this.canvas.querySelectorAll('.connection-line').forEach(line => line.remove());

        // 获取当前画布的技能
        const skills = this.getCurrentSkills();

        // 为每个技能绘制到父级的连接线
        skills.forEach(skill => {
            const parentIds = skill.parentIds || [];
            const validParentIds = parentIds.filter(id => id);

            // 最多绘制4个父级的连接线
            validParentIds.forEach(parentId => {
                const parent = skills.find(s => s.id === parentId);
                if (!parent) return;

                // 创建连接线元素
                const line = document.createElement('div');
                line.className = 'connection-line';

                // 计算缩放后的线宽
                const lineWidth = this.baseSizes.lineWidth * this.scaleFactor;

                // 检查父级是否达标
                const parentLevelValid = parent.level >= 2;
                const allParentsValid = validParentIds.every(pid => {
                    const p = skills.find(s => s.id === pid);
                    return p && p.level >= 2;
                });

                // 检查是否为高亮关联的连接线
                const isHighlighted = this.highlightedSkills.has(parentId) && this.highlightedSkills.has(skill.id);

                // 设置连接线样式
                if (isHighlighted) {
                    line.classList.add('related-highlight');
                    line.style.background = 'linear-gradient(90deg, #9C27B0 0%, #BA68C8 100%)';
                    line.style.boxShadow = `0 ${2 * this.scaleFactor}px ${8 * this.scaleFactor}px rgba(156, 39, 176, 0.2)`;
                    line.style.height = `${lineWidth * 1.4}px`;
                } else if (allParentsValid) {
                    line.classList.add('active');
                    line.style.background = 'linear-gradient(90deg, #4A90E2 0%, #5C6BC0 100%)';
                    line.style.boxShadow = `0 ${2 * this.scaleFactor}px ${8 * this.scaleFactor}px rgba(74, 144, 226, 0.2)`;
                    line.style.height = `${lineWidth * 1.2}px`;
                } else if (parentLevelValid) {
                    line.style.background = 'linear-gradient(90deg, #88C0E8 0%, #90CAF9 100%)';
                    line.style.opacity = '0.8';
                    line.style.height = `${lineWidth}px`;
                } else {
                    line.style.background = 'linear-gradient(90deg, #BDBDBD 0%, #E0E0E0 100%)';
                    line.style.opacity = '0.6';
                    line.style.borderStyle = 'dashed';
                    line.style.height = `${lineWidth}px`;
                }

                // 计算节点中心坐标
                const parentNodeWidth = this.baseSizes.nodeWidth * this.scaleFactor;
                const parentNodeHeight = this.baseSizes.nodeHeight * this.scaleFactor;
                const childNodeWidth = this.baseSizes.nodeWidth * this.scaleFactor;
                const childNodeHeight = this.baseSizes.nodeHeight * this.scaleFactor;

                const parentX = parent.x + parentNodeWidth / 2;
                const parentY = parent.y + parentNodeHeight / 2;
                const childX = skill.x + childNodeWidth / 2;
                const childY = skill.y + childNodeHeight / 2;

                // 计算线的长度和角度
                const dx = childX - parentX;
                const dy = childY - parentY;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;

                // 设置连接线位置和变换
                line.style.width = `${length}px`;
                line.style.left = `${parentX}px`;
                line.style.top = `${parentY}px`;
                line.style.transform = `rotate(${angle}deg)`;
                line.style.transformOrigin = '0 50%';

                // 添加到画布
                this.canvas.appendChild(line);
            });
        });
    }

    /**
     * 选择技能（显示详情）
     */
    selectSkill(skillId) {
        const skills = this.getCurrentSkills();
        const skill = skills.find(s => s.id === skillId);
        if (!skill) return;

        this.selectedSkill = skillId;
        this.selectedSkills.clear();
        this.selectedSkills.add(skillId);
        this.updateSkillInfo(skill);

        // 更新节点选中状态
        this.canvas.querySelectorAll('.skill-node').forEach(node => {
            node.classList.remove('selected');
            if (node.dataset.skillId === skillId) {
                node.classList.add('selected');
            }
        });

        // 高亮关联技能
        if (this.highlightMode) {
            this.highlightRelatedSkills(skillId);
        }
    }

    /**
     * 更新技能信息面板
     */
    updateSkillInfo(skill) {
        const infoPanel = document.getElementById('skillInfo');
        if (!infoPanel || !skill) return;

        const isLocked = this.isSkillLocked(skill);
        const levelInfo = this.getLevelInfo(skill.level);
        
        // 构建父级信息
        let parentInfo = '无';
        if (skill.parentIds && skill.parentIds.length > 0) {
            const validParents = skill.parentIds.filter(id => id);
            if (validParents.length > 0) {
                const skills = this.getCurrentSkills();
                parentInfo = validParents.map(pid => {
                    const parent = skills.find(s => s.id === pid);
                    return parent ? `${parent.name} (${this.getLevelInfo(parent.level).name})` : '未知';
                }).join('<br>');
            }
        }

        // 构建子级信息
        let childInfo = '无';
        const children = this.getCurrentSkills().filter(s => 
            s.parentIds && s.parentIds.includes(skill.id)
        );
        if (children.length > 0) {
            childInfo = children.map(child => 
                `${child.name} (${this.getLevelInfo(child.level).name})`
            ).join('<br>');
        }

        // 构建操作按钮
        const actionsHtml = `
            <div class="skill-actions">
                <button onclick="skillTree.editSkill('${skill.id}')" class="btn btn-primary">编辑</button>
                <button onclick="skillTree.downgradeSkill('${skill.id}')" class="btn btn-warning" ${skill.level <= 0 ? 'disabled' : ''}>
                    ${skill.level <= 0 ? '已最低' : '降级'}
                </button>
                <button onclick="skillTree.upgradeSkill('${skill.id}')" class="btn btn-success" ${isLocked ? 'disabled' : ''}>
                    ${skill.level >= 5 ? '已满级' : '升级'}
                </button>
                <button onclick="skillTree.deleteSkill('${skill.id}')" class="btn btn-danger">删除</button>
                <button onclick="skillTree.highlightRelatedSkills('${skill.id}')" class="btn btn-secondary">查看关联</button>
            </div>
        `;

        // 更新面板内容
        const infoContent = document.querySelector('.skill-info-content');
        if (infoContent) {
            infoContent.innerHTML = `
                <h3>${skill.icon || '🎯'} ${skill.name}</h3>
                <div class="skill-detail-item">
                    <span class="skill-detail-label">等级：</span>
                    ${skill.level}星 (${levelInfo.name}) ${skill.completed ? '✅ 已掌握' : ''}
                </div>
                <div class="skill-detail-item">
                    <span class="skill-detail-label">状态：</span>
                    ${isLocked ? '<span style="color: #D9534F;">🔒 锁定（专精等级未达标）</span>' : '<span style="color: #5CB85C;">✅ 可升级</span>'}
                </div>
                <div class="skill-detail-item">
                    <span class="skill-detail-label">父级技能：</span>
                    ${parentInfo}
                </div>
                <div class="skill-detail-item">
                    <span class="skill-detail-label">子级技能：</span>
                    ${childInfo}
                </div>
                <div class="skill-detail-item">
                    <span class="skill-detail-label">描述：</span>
                    ${skill.description || '无描述'}
                </div>
                ${actionsHtml}
            `;
        }
    }

    /**
     * 清空技能信息面板
     */
    clearSkillInfo() {
        const infoPanel = document.getElementById('skillInfo');
        if (!infoPanel) return;
        
        const infoContent = document.querySelector('.skill-info-content');
        if (infoContent) {
            infoContent.innerHTML = '<p style="text-align: center; color: #666; padding: 20px 0;">点击一个技能查看详情</p>';
        }
    }

    /**
     * 更新统计信息
     */
    updateStatistics() {
        const skills = this.getCurrentSkills();
        const total = skills.length;
        
        // 计算已掌握技能数（5星）
        const completed = skills.filter(s => s.completed).length;
        
        // 计算完成率
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        // 计算平均等级
        const totalStars = skills.reduce((sum, s) => sum + (s.level || 0), 0);
        const avgCompletion = total > 0 ? (totalStars / total).toFixed(1) : 0;
        
        // 计算锁定技能数
        const locked = skills.filter(s => this.isSkillLocked(s)).length;
        
        // 【新增】计算金钱统计
        const selectedSpecialty = document.querySelector('#specialtyType')?.value;
        // 如果技能有specialty字段，则按专精类别过滤；否则使用所有技能
        const specialtySkills = selectedSpecialty && skills.some(s => s.specialty)
            ? skills.filter(skill => skill.specialty === selectedSpecialty)
            : skills;
        
        let specialtyLevel = 0;
        let totalCost = 0;
        specialtySkills.forEach(skill => {
            specialtyLevel += skill.level || 0;
            // 【修改】只计算等级大于0的技能的花费（未点亮的技能不计入）
            if ((skill.level || 0) > 0) {
                const baseCost = skill.cost || 0;
                // 【修改公式】总花费 = 学习花费 + (当前等级-1) × 每级升级花费（避免重复）
                const levelCost = Math.max(0, (skill.level || 0) - 1) * (skill.levelCost || 0);
                totalCost += baseCost + levelCost;
            }
        });

        // 更新DOM
        const updateStat = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        };

        updateStat('totalSkills', total);
        updateStat('completedSkills', completed);
        updateStat('completionRate', `${completionRate}%`);
        updateStat('avgCompletion', `${avgCompletion}星`);
        updateStat('lockedSkills', locked);
        
        // 【新增】更新金钱统计
        updateStat('specialtyLevel', specialtyLevel);
        updateStat('totalCost', totalCost);
    }
}

// ==================== 初始化系统 ====================
let skillTree;
document.addEventListener('DOMContentLoaded', async () => {
    // 优先级：JSON文件 > localStorage > 内置数据
    // 先尝试从JSON文件加载（如果localStorage为空）
    let jsonDataLoaded = false;
    if (!localStorage.getItem('multiCanvasSkillTreeData')) {
        try {
            let jsonData = null;
            const jsonFiles = ['箭术.json', 'C语言技能树.json']; // 尝试多个文件名
            
            // 按优先级尝试加载文件
            for (const fileName of jsonFiles) {
                try {
                    // 尝试方案1：使用fetch（适用于HTTP/HTTPS服务器和现代浏览器）
                    try {
                        const response = await fetch(fileName);
                        if (response.ok) {
                            jsonData = await response.json();
                            console.log('✓ 使用Fetch成功加载' + fileName);
                            break;
                        }
                    } catch (fetchError) {
                        // 方案2：使用XMLHttpRequest（兼容性更好，适合手机浏览器）
                        jsonData = await new Promise((resolve, reject) => {
                            const xhr = new XMLHttpRequest();
                            xhr.open('GET', fileName, true);
                            xhr.timeout = 5000; // 5秒超时
                            xhr.onload = function() {
                                if (xhr.status === 200 || xhr.status === 0) {
                                    try {
                                        resolve(JSON.parse(xhr.responseText));
                                    } catch (e) {
                                        reject(new Error('JSON解析错误'));
                                    }
                                } else {
                                    reject(new Error('HTTP ' + xhr.status));
                                }
                            };
                            xhr.onerror = () => reject(new Error('网络错误'));
                            xhr.ontimeout = () => reject(new Error('请求超时'));
                            xhr.send();
                        }).then(data => {
                            console.log('✓ 使用XHR成功加载' + fileName);
                            return data;
                        }).catch(err => {
                            console.log('XHR加载' + fileName + '失败:', err.message);
                            return null;
                        });
                        
                        if (!jsonData) continue;
                    }
                    
                    if (jsonData) break; // 成功加载，退出循环
                } catch (error) {
                    console.log('尝试加载' + fileName + '失败:', error.message);
                    continue;
                }
            }
            
            if (jsonData) {
                // 将JSON数据转换为应用格式
                const canvasId = 'canvas_' + Date.now();
                const formattedData = {
                    canvasData: {
                        [canvasId]: {
                            name: jsonData.name || '技能树',
                            skills: (jsonData.skills || []).map(skill => ({
                                ...skill,
                                id: skill.id || Date.now().toString(),
                                parentIds: Array.isArray(skill.parentIds) ? skill.parentIds : (skill.parentIds ? [skill.parentIds] : []),
                                level: skill.level || 0,
                                completed: skill.completed || false,
                                icon: skill.icon || '🎯',
                                x: skill.x !== undefined ? skill.x : 200,
                                y: skill.y !== undefined ? skill.y : 200,
                                cost: skill.cost || 0,
                                levelCost: skill.levelCost || 0
                            }))
                        }
                    },
                    currentCanvasId: canvasId
                };
                // 保存到localStorage
                localStorage.setItem('multiCanvasSkillTreeData', JSON.stringify(formattedData));
                jsonDataLoaded = true;
                console.log('✓ 成功加载' + (jsonData.skills ? jsonData.skills.length : 0) + '个技能到本地存储');
            } else {
                console.log('⚠ 无法从JSON文件加载，将使用内置默认数据');
            }
        } catch (error) {
            console.log('⚠ 加载JSON文件出错，使用内置数据:', error.message);
        }
    } else {
        console.log('✓ 从localStorage读取已保存的技能树数据');
    }
    
    // 现在初始化SkillTreeManager
    skillTree = new SkillTreeManager();
    // 暴露到全局，方便HTML内调用
    window.skillTree = skillTree;
});

// 监听技能表单提交
document.getElementById('addSkillForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取原有字段
    const skillId = document.getElementById('skillId').value;
    const skillName = document.getElementById('skillName').value;
    // ... 其他原有字段
    
    // 获取新增的金钱字段
    const skillCost = Number(document.getElementById('skillCost').value); // 学习花费
    const skillLevelCost = Number(document.getElementById('skillLevelCost').value); // 升级花费
    
    // 构建技能数据（包含金钱）
    const skillData = {
        id: skillId || Date.now().toString(),
        name: skillName,
        // ... 其他原有属性
        cost: skillCost, // 新增：学习花费
        levelCost: skillLevelCost, // 新增：每级升级花费
        totalCost: skillCost + (skillLevel * skillLevelCost) // 可选：计算总花费（根据当前等级）
    };
    
    // 后续保存逻辑...
});
// 核心：更新专精等级和共计花费（与技能数据联动）
function updateSpecialtyStats() {
    // 获取当前选中的专精类别（比如箭术）
    const selectedSpecialty = document.querySelector('#specialtyType')?.value;
    
    // 从全局skillTree实例获取当前画布的所有技能
    const allSkills = window.skillTree?.getCurrentSkills() || [];
    
    // 如果技能有specialty字段，则按专精类别过滤；否则使用所有技能
    const specialtySkills = selectedSpecialty && allSkills.some(s => s.specialty)
        ? allSkills.filter(skill => skill.specialty === selectedSpecialty)
        : allSkills;

    // 计算专精等级（所有技能的等级之和）
    let specialtyLevel = 0;
    specialtySkills.forEach(skill => {
        specialtyLevel += skill.level || 0;
    });

    // 计算共计花费
    let totalCost = 0;
    specialtySkills.forEach(skill => {
        // 【修改】只计算等级大于0的技能的花费（未点亮的技能不计入）
        if ((skill.level || 0) > 0) {
            const baseCost = skill.cost || 0;
            // 【修改公式】总花费 = 学习花费 + (当前等级-1) × 每级升级花费（避免重复）
            const levelCost = Math.max(0, (skill.level || 0) - 1) * (skill.levelCost || 0);
            totalCost += baseCost + levelCost;
        }
    });

    // 更新面板显示
    const specialtyLevelEl = document.querySelector('#specialtyLevel');
    const totalCostEl = document.querySelector('#totalCost');
    
    if (specialtyLevelEl) specialtyLevelEl.textContent = specialtyLevel;
    if (totalCostEl) totalCostEl.textContent = totalCost;
}

// 1. 页面初始化时执行一次，显示初始值
window.onload = function() {
    updateSpecialtyStats();
};

// 2. 监听专精类别切换（切换对应的画布）
document.querySelector('#specialtyType').addEventListener('change', function() {
    const selectedSpecialty = this.value; // 获取选中的专精类别（=画布名称）
    
    // 根据画布名称查找对应的画布ID
    const canvasData = window.skillTree?.canvasData || {};
    let targetCanvasId = null;
    for (const canvasId in canvasData) {
        if (canvasData[canvasId].name === selectedSpecialty) {
            targetCanvasId = canvasId;
            break;
        }
    }
    
    // 如果找到对应的画布，切换过去
    if (targetCanvasId && targetCanvasId !== window.skillTree?.currentCanvasId) {
        window.skillTree?.switchCanvas(targetCanvasId);
    } else if (targetCanvasId) {
        // 即使画布未切换，也更新统计信息
        updateSpecialtyStats();
    }
});

// 3. 监听技能等级修改（比如滑块调整level）
document.querySelector('#completionRateInput')?.addEventListener('input', function() {
    // 先保存技能等级到数据中，再更新统计
    const currentSkillId = document.getElementById('skillId').value;
    const newLevel = Number(this.value);
    // 找到当前编辑的技能并更新等级
    const skills = window.skillTree?.getCurrentSkills() || [];
    const skill = skills.find(s => s.id === currentSkillId);
    if (skill) {
        skill.level = newLevel;
        window.skillTree?.updateStatistics(); // 触发联动更新（包括金钱统计）
    }
});

// 4. 监听技能保存（添加/编辑技能后更新）
document.getElementById('addSkillForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // 【原有保存逻辑】：获取技能名称、花费、等级等并保存到skills数组
    // ... 你的保存代码 ...
    
    // 保存后立即更新统计
    updateSpecialtyStats();
});

// 5. （可选）监听技能删除、完成状态切换等事件
// 比如：技能完成状态改变时
function toggleSkillCompleted(skillId) {
    const skills = window.skillTree?.getCurrentSkills() || [];
    const skill = skills.find(s => s.id === skillId);
    if (skill) {
        skill.completed = !skill.completed;
        window.skillTree?.updateStatistics(); // 触发更新（包括金钱统计）
    }
}