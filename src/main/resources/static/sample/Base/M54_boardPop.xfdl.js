(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("M54_boardPop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staLogo","24.33%","7.50%","50.00%","10.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시판 추가");
            obj.set_font("bold 18px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcType","5.67%","20.25%","23.00%","8.00%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("게시판 종류 :");
            this.addChild(obj.name, obj);

            obj = new Static("stcName","8.00%","30.75%","21.00%","8.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수업이름 :");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","32.00%","31.25%","52.00%","7.50%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("이름을 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","25.67%","85.25%","20.00%","7.50%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.67%","85.25%","20.00%","7.50%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Cancel");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoType","31.67%","20.50%","61.67%","7.75%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var rdoType_innerdataset = new nexacro.NormalDataset("rdoType_innerdataset", obj);
            rdoType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이미지형</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">리스트형</Col></Row></Rows>");
            obj.set_innerdataset(rdoType_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Div("Div00","17","189","268","127",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_border("1px solid #c7c7c7");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","50","126","58",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("(1) 이미지형\r\n- 사진첨부필수\r\n- 최대 10개 파일 첨부 ");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","141","50","123","58",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("(2) 리스트형\r\n- 목록형 리스트\r\n- 최대 10개 파일 첨부 ");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","50","10","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("게시판 생성 안내");
            obj.set_font("bold 13px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("M54_boardPop.xfdl", function() {
        //취소 버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };
        //확인 버튼
        this.btnOk_onclick = function(obj,e)
        {
        	var type = this.rdoType.value;
        	var name = this.edtName.value;
        	trace(type);
        	trace(name);

        	if(type!=null && name!=null){
        		var sRtn = type + "|" + name;
        		this.close(sRtn);
        	}else{
        		this.alert("모든 항목을 기입해주세요.");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
        };

        this.loadIncludeScript("M54_boardPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();