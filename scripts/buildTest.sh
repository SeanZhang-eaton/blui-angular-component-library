#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "🔍 Checking Angular Components Build Artifacts"

# 检查构建目录是否存在
COMPONENTS_DIR="dist/libs/@brightlayer-ui/angular-components"
THEMES_DIR="dist/libs/@brightlayer-ui/angular-themes"

if [ ! -d "$COMPONENTS_DIR" ]; then
    echo -e "${RED}❌ Components build directory not found: $COMPONENTS_DIR${NC}"
    echo "💡 Run 'pnpm run build:lib' first"
    exit 1
fi

echo "📁 Checking Components Package..."
cd "$COMPONENTS_DIR"

echo "📋 Checking for required files..."
echo -ne "  📄 package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}❌ Not Found${NC}" && exit 1; else echo -e "${GREEN}✅ Found${NC}"; fi

echo -ne "  📄 README.md: "
if [ ! -f ./README.md ]; then echo -e "${RED}❌ Not Found${NC}" && exit 1; else echo -e "${GREEN}✅ Found${NC}"; fi

echo -ne "  📄 index.cjs.js: "
if [ ! -f ./index.cjs.js ]; then echo -e "${RED}❌ Not Found${NC}" && exit 1; else echo -e "${GREEN}✅ Found${NC}"; fi

echo -ne "  📄 index.es.js: "
if [ ! -f ./index.es.js ]; then echo -e "${RED}❌ Not Found${NC}" && exit 1; else echo -e "${GREEN}✅ Found${NC}"; fi

echo "🔍 Checking core components..."
COMPONENTS=(
    "channel-value"
    "drawer" 
    "empty-state"
    "hero"
    "info-list-item"
    "list-item-tag"
    "score-card"
    "toolbar-menu"
    "user-menu"
)

for component in "${COMPONENTS[@]}"; do
    echo -ne "  🧩 $component: "
    # 检查是否存在相关的 .d.ts 文件
    if find . -name "*$component*" -name "*.d.ts" | grep -q .; then
        echo -e "${GREEN}✅ Found${NC}"
    else
        echo -e "${RED}❌ Not Found${NC}"
        exit 1
    fi
done

echo -e "\n${GREEN}🎉 Components package validation passed!${NC}"

# 返回到项目根目录
cd "../../.."

# 检查主题包
if [ -d "$THEMES_DIR" ]; then
    echo "🎨 Checking Themes Package..."
    cd "$THEMES_DIR"
    echo -ne "  📄 package.json: "
    if [ ! -f ./package.json ]; then echo -e "${RED}❌ Not Found${NC}" && exit 1; else echo -e "${GREEN}✅ Found${NC}"; fi
    echo -e "${GREEN}🎉 Themes package validation passed!${NC}"
fi

echo -e "\n${GREEN}🚀 All build artifacts validated successfully!${NC}"
exit 0
