(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("M41_fileForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("tp_title", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"made_date\" type=\"STRING\" size=\"256\"/><Column id=\"mod_date\" type=\"STRING\" size=\"256\"/><Column id=\"emp_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("tp_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"explain\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"temp_code\" type=\"INT\" size=\"256\"/><Column id=\"form_code\" type=\"INT\" size=\"256\"/><Column id=\"writer_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("tp_origin", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_user", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"team_name\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"pos_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"status\">공개</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"status\">비공개</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기안 양식 관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_form","20","90","150","546",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("tp_title");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"- 양식함\" textAlign=\"left\" padding=\"5px\" font=\"bold 14px/normal &quot;Arial&quot;,&quot;Malgun Gothic&quot;,&quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:title\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_temp","180","90",null,"544","560",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("tp_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"양식명\" font=\"bold 14px/normal &quot;Arial&quot;,&quot;Malgun Gothic&quot;,&quot;Gulim&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_titleAdd","20","54","43","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_titleMod","73","54","43","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_titleRm","126","54","43","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","185","54","115","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">name</Col><Col id=\"datacolumn\">기안제목</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("기안제목");
            obj.set_value("name");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","310","53","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_listSearch","470","53","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_search01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_listAdd","438","18","92","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("양식 추가");
            obj.set_cssclass("btn_WF_add01");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00",null,"90","450","571","100",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("0");
            obj.set_tabposition("bottom");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("양식 추가");
            obj.set_cssclass("sta_WF_title01");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","20","77","120","46",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("양식 분류");
            obj.set_border("1px solid #c9c9c9,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","124","120","46",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("기안 양식 명 *");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","171","120","46",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("양식 담당자");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_02","20","218","120","46",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("설명 *");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_03","20","265","120","116",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_04","20","382","120","46",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("공개여부");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_05","20","429","120","46",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("템플릿 설정");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_form","122","77",null,"46","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_border("1px solid #c9c9c9,0px none");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_06_00","122","124",null,"46","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_writer_code","122","171",null,"46","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_01","122","218",null,"46","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_02","119","266",null,"116","23",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_03","122","382",null,"46","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_04","122","429",null,"46","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("tp_listTemp","153","433","180","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_innerdataset("tp_origin");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_value("6");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("tp_listName","149","130","131","32",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_maxlength("10");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("tp_listExplain","150","225","169","32",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_maxlength("15");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("tp_listContents","150","273","230","100",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_maxlength("100");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addList","335","483",null,"25","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("추가");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_reset","227","483",null,"25","138",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("취소");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Radio("radio_status","149","379","137","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("code");
            obj.set_datacolumn("status");
            obj.set_direction("vertical");
            obj.set_text("공개");
            obj.set_value("Y");
            obj.set_index("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_nameErrMsg","286","131","122","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_explainErrMsg","333","227",null,"30","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_comboErrMsg","339","436",null,"37","20",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_color("red");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"34","-484",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("양식 수정");
            obj.set_cssclass("sta_WF_title01");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","53","77","120","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("양식 분류");
            obj.set_border("1px solid #c9c9c9,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_00","53","124","120","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("기안 양식 명 *");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_01","53","171","120","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("양식 담당자");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_02","53","218","120","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("설명 *");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_03","53","265","120","116",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_04","53","382","120","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("공개여부");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_05","53","429","120","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_border("0px none,1px solid #c9c9c9,1px solid #c9c9c9,0px none");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("템플릿 설정");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_form","173","77","498","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_border("1px solid #c9c9c9,0px none");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_06_00","173","124","498","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_writer_code","173","171","498","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_01","173","218","498","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_02","173","265","498","116",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_03","173","382","498","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_06_00_04","173","429","498","46",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_border("0px none,0px none,1px solid #c9c9c9");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("tp_listTemp","181","435","193","35",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_innerdataset("tp_origin");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_value("6");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("tp_listName","181","131","193","32",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_maxlength("10");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("tp_listExplain","181","225","259","32",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_maxlength("15");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new TextArea("tp_listContents","181","272","370","100",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_maxlength("100");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Radio("radio_status","183","380","137","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Tab00_Tabpage2_form_radio_status_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_radio_status_innerdataset", obj);
            Tab00_Tabpage2_form_radio_status_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">공개</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">비공개</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_Tabpage2_form_radio_status_innerdataset);
            obj.set_text("공개");
            obj.set_value("Y");
            obj.set_index("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_nameErrMsg","384","132","292","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("20");
            obj.set_color("red");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_explainErrMsg","453","227","234","30",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("21");
            obj.set_color("red");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_comboErrMsg","390","436","275","37",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("22");
            obj.set_color("red");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_modList","585","489","86","33",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("23");
            obj.set_text("수정");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_removeList","485","489","86","33",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("24");
            obj.set_text("삭제");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1090,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage2.form.tp_listName","value","tp_list","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage2.form.tp_listExplain","value","tp_list","explain");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Tab00.Tabpage2.form.tp_listContents","value","tp_list","contents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Tab00.Tabpage2.form.radio_status","value","tp_list","status");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Tab00.Tabpage2.form.tp_listTemp","value","tp_list","temp_code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Tab00.Tabpage1.form.sta_form","text","tp_title","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Tab00.Tabpage1.form.tp_listName","value","tp_list","name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Tab00.Tabpage1.form.tp_listExplain","value","tp_list","explain");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Tab00.Tabpage1.form.tp_listContents","value","tp_list","contents");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("M41_fileForm.xfdl", function() {
        var getAddCol =-1;
        var count =0;
        this.M41_fileForm_onload = function(obj,e)
        {

        	this.transaction(
        		"ds_getUser" //1. strsvcid
        		,"/nexTemp/ds_user.nex" //2.strurl
        		,"" //3.strInDatasets Sds=Fds:U :A :
        		,"ds_user=out_ds" //4.strOutDatasets
        		,"" //5.strArgument
        		,"fn_callback" //6.strCallbackFunc
        	);

        	this.transaction(
        		"tp_origin" //1. strsvcid
        		,"/nexTemp/tp_origin.nex" //2.strurl
        		,"" //3.strInDatasets Sds=Fds:U :A :
        		,"tp_origin=out_ds" //4.strOutDatasets
        		,"" //5.strArgument
        		,"fn_callback" //6.strCallbackFunc
        	);

        	this.transaction(
        		"tp_title" //1. strsvcid
        		,"/nexTemp/tp_title.nex" //2.strurl
        		,"" //3.strInDatasets Sds=Fds:U :A :
        		,"tp_title=out_ds" //4.strOutDatasets
        		,"" //5.strArgument
        		,"fn_callback" //6.strCallbackFunc
        		);

        };


        this.fn_callback=function(id,errmsg,etc){
         trace("함수 호출 id: "+id);
        }

        this.fn_update_tpTitle=function(id,url){
        		this.transaction(
        		id //1. strsvcid
        		,url //2.strurl
        		,"in_ds=tp_title:U" //3.strInDatasets Sds=Fds:U :A :
        		,"" //4.strOutDatasets
        		,"" //5.strArgument
        		,"fn_callback" //6.strCallbackFunc
        		);
        }


        this.btn_titleAdd_onclick = function(obj,e)
        {
        	var cf = new ChildFrame();
        	cf.init("cf_addTtitle",0,0,310,400)

        	cf.set_formurl("popup::fileform_addTitle.xfdl");
        	cf.set_openalign("center middle");
        	cf.showModal(
        		this.getOwnerFrame(),
        		{},
        		this,
        		"fn_cbAddTitle"
        	);
        };



        this.btn_titleMod_onclick = function(obj,e)
        {
        	var cf = new ChildFrame();
        	cf.init("cf_modTtitle",0,0,310,400)
        	var code = this.tp_title.getColumn(this.tp_title.rowposition,"code");
        	cf.set_formurl("popup::fileform_modTitle.xfdl");
        	cf.set_openalign("center middle");
        	cf.showModal(
        		this.getOwnerFrame(),{code:code},this,"fn_cbModTitle"
        	);
        };


        this.fn_cbAddTitle=function(id,args){
        if(args=="cancel"){
        	return;
        }
        	this.M41_fileForm_onload();

        }

        this.fn_cbModTitle=function(id,args){
        if(args=="cancel"){
        	return;
        }
        	this.M41_fileForm_onload();

        }


        this.btn_titleRm_onclick = function(obj,e)
        {
        	var curRow = this.grid_form.currentrow;
        	this.tp_title.deleteRow(curRow);

        	this.fn_update_tpTitle("tp_titleRm","/nexTemp/tp_titleRm.nex");
        };




        this.grid_form_oncellclick = function(obj,e)
        {

        	this.Tab00.set_visible(false);

        	var getCol = this.tp_title.getColumn(this.tp_title.rowposition,"code");
        		this.transaction(
        		"onclick_tp_title" //1. strsvcid
        		,"/nexTemp/onclick_tp_title.nex" //2.strurl
        		,"" //3.strInDatasets Sds=Fds:U :A :
        		,"tp_list=out_ds" //4.strOutDatasets
        		,"code="+getCol //5.strArgument
        		,"fn_callback" //6.strCallbackFunc
        		);
        };

        this.btn_listAdd_onclick = function(obj,e)
        {
        	//먼가 이벤트 멈추는게 있을거같당.
        	if(this.tp_title.getCount()==0){
        		return;
        	}
        	if(count!=0){
        		return;
        	}
        	count++;

        	var curRow = this.tp_list.addRow();
        	getAddCol=curRow;
        	this.Tab00.set_tabindex(0);
        	this.Tab00.set_visible(true);
        	var form_title = this.tp_title.getColumn(this.tp_title.rowposition,"title");
        	this.Tab00.Tabpage1.form.sta_form.set_text(form_title);
        	var user_name = this.ds_user.getColumn(0,"name");
        	var user_dept = this.ds_user.getColumn(0,"dept_name");
        	this.Tab00.Tabpage1.form.sta_writer_code.set_text(user_name+" | "+user_dept);

        };

        this.btn_addList_onclick = function(obj,e)
        {
        	var curRow = this.tp_list.rowposition;
        	var name = this.Tab00.Tabpage1.form.tp_listName.getLength();
        	var explain = this.Tab00.Tabpage1.form.tp_listExplain.getLength();
        	if(name==0){
        		this.Tab00.Tabpage1.form.sta_nameErrMsg.set_text("양식명을 입력해주세요.");
        		this.Tab00.Tabpage1.form.tp_listName.setFocus(true);
        		return;
        	}else{
        		this.Tab00.Tabpage1.form.sta_nameErrMsg.set_text("");
        	}
        	if(explain==0){
        		this.Tab00.Tabpage1.form.sta_explainErrMsg.set_text("설명을 입력해주세요.");
        		this.Tab00.Tabpage1.form.tp_listExplain.setFocus(true);
        		return;
        	}else{
        		this.Tab00.Tabpage1.form.sta_explainErrMsg.set_text("");
        	}
        	this.tp_list.setColumn(curRow,"writer_code",this.ds_user.getColumn(0,"code"));
        	this.tp_list.setColumn(curRow,"temp_code",this.tp_origin.getColumn(this.tp_origin.rowposition,"code"));
        	this.tp_list.setColumn(curRow,"form_code",this.tp_title.getColumn(this.tp_title.rowposition,"code"));
        	this.tp_list.setColumn(curRow,"status",this.Tab00.Tabpage1.form.radio_status.value);
        	this.transaction(
        		"addList_onclick" //1. strsvcid
        		,"/nexTemp/addList_onclick.nex" //2.strurl
        		,"in_ds=tp_list:U" //3.strInDatasets Sds=Fds:U :A :
        		,"tp_list=out_ds" //4.strOutDatasets
        		,""
        		,"fn_callback" //6.strCallbackFunc
        		);
        	this.Tab00.set_visible(false);
        	count--;
        	trace(count);
        };

        this.div_addListForm_btn_reset_onclick = function(obj,e)
        {
        	this.tp_list.deleteRow(this.tp_list.rowposition);
        	this.Tab00.set_visible(false);
        	count--;
        };

        this.grid_temp_oncellclick = function(obj,e)
        {
        	var curRow = this.tp_list.rowposition;

        	if(curRow==getAddCol){
        		this.Tab00.set_tabindex(0);
        		return;
        	}
        	this.Tab00.set_visible(true);
        	this.Tab00.set_tabindex(1);
        	var user_name = this.ds_user.getColumn(0,"name");
        	var user_dept = this.ds_user.getColumn(0,"dept_name");
        	var temp_name = this.tp_title.getColumn(this.tp_title.rowposition,"title");
        	this.Tab00.Tabpage2.form.sta_form.set_text(temp_name);
        	this.Tab00.Tabpage2.form.sta_writer_code.set_text(user_name+" | "+user_dept);
        };

        this.div_addListForm_btn_modList_onclick = function(obj,e)
        {
        	var rowPosition = this.tp_list.rowposition;
        	var writer_code=this.ds_user.getColumn(0,"code");
        	var temp_code=this.tp_origin.getColumn(this.tp_origin.rowposition,"code");
        	var name=this.tp_list.getColumn(rowPosition,"name");
        	var explain =this.tp_list.getColumn(rowPosition,"explain");
        	if(name==""){
        		this.Tab00.Tabpage2.form.sta_nameErrMsg.set_text("양식명을 입력해주세요.");
        		this.Tab00.Tabpage2.form.tp_listName.setFocus(true);
        		return;
        	}else{
        		this.Tab00.Tabpage2.form.sta_nameErrMsg.set_text("");
        	}
        	if(explain==""){
        		this.Tab00.Tabpage2.form.sta_explainErrMsg.set_text("설명을 입력해주세요.");
        		this.Tab00.Tabpage2.form.tp_listExplain.setFocus(true);
        		return;
        	}else{
        		this.Tab00.Tabpage2.form.sta_explainErrMsg.set_text("");
        	}
        	var form_code= this.tp_title.getColumn(this.tp_title.rowposition,"code");
        	this.transaction(
        		"modList_onclick" //1. strsvcid
        		,"/nexTemp/modList_onclick.nex" //2.strurl
        		,"in_ds=tp_list:U" //3.strInDatasets Sds=Fds:U :A :
        		,"tp_list=out_ds" //4.strOutDatasets
        		,"form_code="+form_code
        		,"fn_callback" //6.strCallbackFunc
        	);
        	this.Tab00.set_visible(false);
        };


        this.div_addListForm_btn_removeList_onclick = function(obj,e)
        {
        	this.tp_list.deleteRow(this.tp_list.rowposition);
        	this.transaction(
        		"delList" //1. strsvcid
        		,"/nexTemp/delList.nex" //2.strurl
        		,"in_ds=tp_list:U" //3.strInDatasets Sds=Fds:U :A :
        		,"tp_list=out_ds" //4.strOutDatasets
        		,"" //5.strArgument
        		,"fn_callback" //6.strCallbackFunc
        	);
        	var rowCount = this.tp_list.getCount();
        	trace(rowCount);
        	if(rowCount==0){
        		this.Tab00.set_visible(false);
        	}
        };

        this.btn_listSearch_onclick = function(obj,e)
        {

        	var getSearch = this.Edit00.value;
        	var form_code=this.tp_title.getColumn(this.tp_title.rowposition,"code");
        	this.transaction(
        		"searchList" //1. strsvcid
        		,"/nexTemp/searchList.nex" //2.strurl
        		,"" //3.strInDatasets Sds=Fds:U :A :
        		,"tp_list=out_ds" //4.strOutDatasets
        		,"getSearch="+getSearch+" form_code="+form_code //5.strArgument
        		,"fn_callback" //6.strCallbackFunc
        	);

        };




        this.Combo00_onitemchanged = function(obj,e)
        {

        };

        this.Tab00_Tabpage1_Static01_02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.M41_fileForm_onload,this);
            this.grid_form.addEventHandler("oncellclick",this.grid_form_oncellclick,this);
            this.grid_temp.addEventHandler("oncellclick",this.grid_temp_oncellclick,this);
            this.btn_titleAdd.addEventHandler("onclick",this.btn_titleAdd_onclick,this);
            this.btn_titleMod.addEventHandler("onclick",this.btn_titleMod_onclick,this);
            this.btn_titleRm.addEventHandler("onclick",this.btn_titleRm_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btn_listSearch.addEventHandler("onclick",this.btn_listSearch_onclick,this);
            this.btn_listAdd.addEventHandler("onclick",this.btn_listAdd_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.Static01_01.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.Tab00.Tabpage1.form.Static01_02.addEventHandler("onclick",this.Tab00_Tabpage1_Static01_02_onclick,this);
            this.Tab00.Tabpage1.form.tp_listTemp.addEventHandler("onitemchanged",this.div_addListForm_tp_listTemp_onitemchanged,this);
            this.Tab00.Tabpage1.form.tp_listName.addEventHandler("onchanged",this.div_addListForm_tp_listName_onchanged,this);
            this.Tab00.Tabpage1.form.btn_addList.addEventHandler("onclick",this.btn_addList_onclick,this);
            this.Tab00.Tabpage1.form.btn_reset.addEventHandler("onclick",this.div_addListForm_btn_reset_onclick,this);
            this.Tab00.Tabpage1.form.radio_status.addEventHandler("onitemchanged",this.radio_addList_onitemchanged,this);
            this.Tab00.Tabpage2.form.Static01_01.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.Tab00.Tabpage2.form.tp_listTemp.addEventHandler("onitemchanged",this.div_addListForm_tp_listTemp_onitemchanged,this);
            this.Tab00.Tabpage2.form.tp_listName.addEventHandler("onchanged",this.div_addListForm_tp_listName_onchanged,this);
            this.Tab00.Tabpage2.form.radio_status.addEventHandler("onitemchanged",this.radio_addList_onitemchanged,this);
            this.Tab00.Tabpage2.form.btn_modList.addEventHandler("onclick",this.div_addListForm_btn_modList_onclick,this);
            this.Tab00.Tabpage2.form.btn_removeList.addEventHandler("onclick",this.div_addListForm_btn_removeList_onclick,this);
        };

        this.loadIncludeScript("M41_fileForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
