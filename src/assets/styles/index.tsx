import { StyleSheet,Dimensions, Platform } from "react-native";
import { colors, sizes, fonts } from "../../constants/them";
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    // app styles 
    container: { flex:1, alignItems: 'center', },
    containerCenter: { justifyContent: 'flex-start', flexDirection:'row', alignItems:'center'},
    appContainer: { flex:1, justifyContent:'center', alignItems: 'center', },
    appMapContainer: {  ...StyleSheet.absoluteFillObject, flex: 1, justifyContent: "flex-end",alignItems: "center", marginBottom: 8 },

    // images styes 
    imgSet:{ height: Platform.select({ web: '30%', windows: '30%', android: '10%', ios: '10%'}), width:'60%', resizeMode:'contain' },
    imgTop:{ width:375, height:475,resizeMode:'contain',marginTop:20,alignSelf:'center'},
    imgModal:{ borderTopRightRadius: sizes.radius2, borderTopLeftRadius: sizes.radius2, backgroundColor:colors.appBule,position:'absolute',bottom:0,left:0,width:'100%',height:'38%',padding:40 },
    imgApp:{height:50,width:50,resizeMode:'contain',marginBottom:10},
    imgApp2:{height:25,width:25,resizeMode:'contain'},

    // button style 
    btnView:{ left: 40, right: 40, bottom: 49, position: 'absolute',flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    btnOval:{justifyContent:'space-between',flexDirection:'row',alignItems:'center'},
    btnSign:{paddingTop:20},
    btnPsw:{paddingTop:20,width:'70%'},
    
    // text Styles 
    txtTitle:{...fonts.h2,color:colors.white},
    txtBtn:{...fonts.h3,color:colors.white},
    txtDis:{...fonts.body3,color:colors.lightBlue,opacity:0.8,paddingTop:sizes.padding3},
    bottamLoader:{ bottom:80, position:'absolute', },
    directional1:{width:16,height:16,backgroundColor:colors.darkgray,borderRadius:10,marginLeft:sizes.padding3},
    directional2:{width:10,height:10,backgroundColor:colors.white,borderRadius:10,marginLeft:sizes.padding3},
    appLoginText:{justifyContent:'flex-start', fontSize:28, marginBottom:20},

    // view style 
    AppView1:{paddingTopz:20,alignItems:'center'},
    row:{flexDirection:'row'},

    // shared components
    redio:{ width: 24,height: 24,borderRadius: 12,borderWidth: 2,borderColor: 'black',justifyContent: 'center',alignItems: 'center',marginRight: 8,},
    redioAnimation:{ width: 12,height: 12,borderRadius: 6,backgroundColor: 'black', },
    soucual:{flexDirection:'row',borderRadius:10,paddingVertical: 13, marginVertical: 10,width: '100%',justifyContent:'center',shadowColor: colors.lightGray2,shadowOffset: {width: 0,height: 8,},shadowOpacity: 0.46,shadowRadius: 11.14,elevation: 17,},
    header:{ padding: 16,alignItems: 'center', },
    profileImage: {width: 90,height: 90,borderRadius: 100,marginRight: 12,},
    username: {fontSize: 16,fontWeight: 'bold',marginTop: 20, color:colors.backgroundColor},

    // Home screen
    appHeader:{ backgroundColor:colors.appBule3, borderBottomLeftRadius: 50, borderBottomRightRadius:50 , height:200, width:'100%', },
    event:{ marginTop: 40, marginHorizontal:18, flex:1 },
    eventHeader:{ flexDirection:'row', justifyContent:'space-between', alignContent:'space-between' },
    txtEvent:{ ...fonts.largeTitleBold },
    imgEvent:{ height: 150, width:200, flexDirection:'row', justifyContent:'space-between', padding:10},
    eventView:{ width:200, paddingTop: sizes.padding, paddingLeft: 5},
    txtDate:{flexDirection:'row', padding: sizes.base,alignItems:'center',},    
    txtDateDay:{padding:10,borderRadius:12,justifyContent:'center',alignItems:'center',backgroundColor:colors.appBule,opacity:0.5},    
    font1:{ ...fonts.h1 },
    font2:{ ...fonts.h2 },
    font3:{ ...fonts.body3, color:colors.gray },
    pagerView:{flex:1,marginHorizontal:sizes.padding, marginTop:sizes.radius},

    // maps screen 
    map: { ...StyleSheet.absoluteFillObject,width: '100%', height: '100%',},
    text: { fontSize: 20, backgroundColor: "lightblue", position:'absolute', right:0, top:20},
    inputStyle: { paddingHorizontal: 16, borderRadius: 20, color: colors.backgroundColor, fontSize: 16 },
    predictionsContainer: { backgroundColor: '#cfcfcf', padding: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
    predictionRow: { paddingBottom: 15, marginBottom: 15, borderBottomColor: 'black', borderBottomWidth: 1, },
    searchView:{ borderRadius: 10, margin: 10, color: '#000', borderColor: '#666', width:'78%', borderWidth: 1, height: 50, paddingHorizontal: 10, fontSize: 18, },

    // bottom tab style
    tab:{position: 'absolute',left: 0,bottom: 0,right: 0,height:70,borderTopWidth: 1,elevation: 0, backgroundColor:colors.textColor},
    addEvent:{position: 'relative', bottom: 35,elevation: 0, backgroundColor:colors.textColor},
    icon:{padding:10, backgroundColor: colors.appBule,alignItems:'center',borderRadius:100},
    btn:{backgroundColor: colors.appBule,borderRadius:10, alignSelf:'center', paddingHorizontal:10},
    btn1:{borderWidth:1, borderColor: colors.appBule,borderRadius:10, alignSelf:'center', paddingHorizontal:10},
    btn2:{backgroundColor: colors.appBule, opacity:0.5,borderRadius:10, alignSelf:'center',flexDirection:"row", paddingHorizontal:10, paddingVertical: sizes.base},

    // Drawer
    planButton: {flexDirection:'row',backgroundColor:colors.cyan2,padding:10,paddingLeft:12,alignItems:'center', marginVertical:20, marginHorizontal:10,borderRadius:6},
    SignOutButton: {flexDirection:'row',backgroundColor:colors.red2,padding:10,alignItems:'center',paddingLeft:12, marginVertical:20, marginHorizontal:10,borderRadius:6},
});
 
export default styles;