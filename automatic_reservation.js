//�ݒ肪�K�v�ȍ���
var user_name = "���[�UID";
var user_password = "�p�X���[�h";
var t_url = "�T�C�gURL";
var t_r_url = "�\��y�[�WURL";
var room_name = "������";

//�\��̏��
var title = "�e�X�g"
var startyear = "2015";
var startmonth = "12";
var startday = "20";
var starthour = "12";
var startminute = "0";
var endyear = "2015";
var endmonth = "12";
var endday = "20";
var endhour = "13";
var endminute = "0";

//  Internet Explorer�I�u�W�F�N�g���擾(Internet Explorer�̋N��)
var IEApp = new ActiveXObject( "InternetExplorer.Application" );


//  Internet Explorer�A�v���P�[�V������\��
IEApp.Visible = true;


//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
while( IEApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );


//�@�T�C�g�Ɉړ�
IEApp.Navigate( t_url );

//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
while( IEApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );

// �t�H�[���ɓ���
var TextBox1 = IEApp.document.getElementById( "loginname" );
var TextBox2 = IEApp.document.getElementById( "loginpassword" );
TextBox1.value = user_name;
TextBox2.value = user_password;

// 3�b��~
WScript.Sleep( 3000 );


//  �{�^��������
var Button = IEApp.document.getElementById( "btn_login" );
Button.click();

//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
while( IEApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );

/*-----------------------------------------------------------*/
//�@��c���\��y�[�W�Ɉړ�
IEApp.Navigate( t_r_url );

//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
while( IEApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );

//  �쐬�{�^���N���b�N
var Create =  IEApp.document.getElementsByClassName( "ico-create" ).item(0) ;
Create.click();

//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
while( IEApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );

//�^�C�g��
var Title = IEApp.document.getElementsByClassName( "textbox" ).item(0) ;
Title.value = title;

var Startyear = IEApp.document.getElementsByClassName( "textbox" ).item(2) ;
Startyear.value = startyear;

var Startmonth = IEApp.document.getElementsByClassName( "textbox" ).item(3) ;
Startmonth.value = startmonth;

var Startday = IEApp.document.getElementsByClassName( "textbox" ).item(4) ;
Startday.value = startday;

var Starthour = IEApp.document.getElementsByClassName( "textbox" ).item(5) ;
Starthour.value = starthour;

var Startminut = IEApp.document.getElementsByClassName( "textbox" ).item(6) ;
Startminut.value = startminute

//�I������
var Endyear = IEApp.document.getElementsByClassName( "textbox" ).item(7) ;
Endyear.value = endyear;

var Endmonth = IEApp.document.getElementsByClassName( "textbox" ).item(8) ;
Endmonth.value = endmonth;

var Endday = IEApp.document.getElementsByClassName( "textbox" ).item(9) ;
Endday.value = endday;

var Endhour = IEApp.document.getElementsByClassName( "textbox" ).item(10) ;
Endhour.value = endhour;

var Endminut = IEApp.document.getElementsByClassName( "textbox" ).item(11) ;
Endminut.value = endminute

//�����I��
var Room = IEApp.document.getElementsByClassName( "ico-non" ).item(4) ;
Room.click();

// 3�b��~
WScript.Sleep( 3000 );

var SearchForm = IEApp.document.getElementById( "search-form" ).children.item(0).children.item(2).children.item(1).children.item(0);

SearchForm.value = room_name;

var SearchButton = IEApp.document.getElementById( "search-form" ).children.item(0).children.item(3).children.item(0).children.item(0);
SearchButton.click();

// 3�b��~
WScript.Sleep( 3000 );

var RoomButton = IEApp.document.getElementsByClassName( "resrcitem" ).item(0).parentNode;

WScript.Echo( RoomButton.outerHTML�@);
RoomButton.dbclick();
// 0.1�b��~
WScript.Sleep( 100 );
RoomButton.click();


/*-----------------------------------------------------------*/
WScript.Echo( SearchForm.outerHTML�@);
//  �y�[�W�̓ǂݍ��݂��I���܂ŏ������~�߂�@���̌�3�b��~
while( IEApp.Busy )
    WScript.Sleep( 500 ); 
WScript.Sleep( 3000 );

//  Internet Explorer���I��
IEApp.Quit();

WScript.Echo( "�I��" );

//  �I�u�W�F�N�g�����
IEApp = null;

