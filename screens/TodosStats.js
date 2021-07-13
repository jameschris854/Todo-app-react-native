import {inject, observer} from 'mobx-react';
import React from 'react';
import {FlatList, Text, View, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
SolidIcons._fontFamily = 'FontAwesome5Free-Solid';

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const TodoStats = ({TodosList,route}) => {
    const {switchInputState} = TodosList;
  console.log('list : ' + JSON.stringify(TodosList.todos));
  let active = 0;
  let inactive = 0;
  let length = TodosList.todos.length;
  TodosList.todos.map(todo => (todo.active ? active++ : inactive++));
  console.log(length, active, inactive);
  const data = [
    {
      name: 'completed',
      tasks: (active / length) * 100,
      color: '#79d279',
    },
    {
      name: 'incomplete',
      tasks: (inactive / length) * 100,
      color: '#809fff',
    },
  ];
  // if(route.name === 'Stats') console.log('switching niputstate');
    
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'flex-start',
          alingItems: 'center',
          position: 'relative',
          height:'100%'
        }}>
        <PieChart
          data={data}
          width={500}
          height={350}
          chartConfig={chartConfig}
          accessor={'tasks'}
          backgroundColor={'#fafafa'}
          paddingLeft={'60'}
          center={[20, 0]}
          absolute
          hasLegend={false}
        />
        <View
          style={{
            borderRadius: 60,
            backgroundColor: '#fafafa',
            width: 120,
            height: 120,
            position: 'absolute',
            left: Dimensions.get('window').width / 2 - 50,
            top: 125 * 0.93,
          }}>
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10,width:'100%'}}>
            <FontAwesome style={{marginRight:10,color:'#809fff'}} icon={SolidIcons.smile} />
            <Text>{`Finished tasks - ${inactive}`}</Text>
          </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10,width:'100%',borderBottom:'solid',borderColor:'lightgrey'}}>
            <FontAwesome style={{marginRight:10,color:'#79d279'}} icon={SolidIcons.smile} />
            <Text>{`Finished tasks - ${active}`}</Text>
          </View>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10,width:'100%',borderBottom:'solid',borderColor:'lightgrey'}}>
            <FontAwesome style={{marginRight:10,color:'red'}} icon={SolidIcons.smile} />
            <Text>{`Total tasks - ${length}`}</Text>
          </View>
      </View>
    </>
  );
};

export default inject('TodosList')(observer(TodoStats));
